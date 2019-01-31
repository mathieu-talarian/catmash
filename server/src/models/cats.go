package models

import (
	"catmash/src/database"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"os"

	"github.com/jinzhu/gorm"
)

type Cats struct {
	gorm.Model
	Image  string  `gorm:"type:varchar(500)" json:"image"`
	UUID   string  `gorm:"type:varchar(500)" json:"uuid"`
	Rating float64 `gorm:"notnull;type:decimal" json:"rating"`
}

type Image struct {
	Url string `json:"url"`
	Id  string `json:"id"`
}

type catsImageList struct {
	Collection []Image `json:"images`
}

func InstallCats() error {
	jsonFile, err := os.Open("images.json")
	if err != nil {
		log.Println(err)
		return err
	}
	defer jsonFile.Close()
	byteValue, err := ioutil.ReadAll(jsonFile)
	if err != nil {
		log.Println(err)
	}
	cats := make([]Image, 0)
	if err := json.Unmarshal(byteValue, &cats); err != nil {
		return err
	}
	database.Db.AutoMigrate(&Cats{})
	for _, v := range cats {
		database.Db.Create(&Cats{
			Image:  v.Url,
			UUID:   v.Id,
			Rating: float64(2000),
		})
	}
	return nil
}

func GetCat(id int) (cat Cats) {
	database.Db.Where(fmt.Sprintf("id = %d", id)).First(&cat)
	return
}

func (c *Cats) Update() {
	database.Db.Save(c)
}

func All() (cats []Cats) {
	database.Db.Order("rating desc").Find(&cats)
	return
}
