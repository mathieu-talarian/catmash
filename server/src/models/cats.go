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
	Image string `gorm:"type:varchar(500)"`
	UUID  string `gorm:"type:varchar(500)"`
}

type Image struct {
	Url string `json:"url"`
	Id  string `json:"id"`
}

type catsImageList struct {
	Collection []Image `json:"images`
}

func InstallCats() {
	jsonFile, err := os.Open("images.json")
	if err != nil {
		log.Println(err)
	}
	defer jsonFile.Close()
	byteValue, err := ioutil.ReadAll(jsonFile)
	if err != nil {
		log.Println(err)
	}
	cats := make([]Image, 0)
	json.Unmarshal(byteValue, &cats)
	fmt.Println(cats)
	database.Db.AutoMigrate(&Cats{})
	for _, v := range cats {
		database.Db.Create(&Cats{
			Image: v.Url,
			UUID:  v.Id,
		})
	}
}

func GetCat(id int) (cat Cats) {
	if id == 0 {
		id++
	}
	database.Db.Where(fmt.Sprintf("id = %d", id)).First(&cat)
	return
}
