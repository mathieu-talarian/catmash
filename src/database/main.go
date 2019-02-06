package database

import (
	"fmt"
	"os"

	"github.com/jinzhu/gorm"

	// psql dialect for gorm
	_ "github.com/jinzhu/gorm/dialects/postgres"
)

var Db *gorm.DB

var dbURL = os.Getenv("DATABASE_URL")

func init() {
	var err error

	fmt.Println(os.Getenv("DATABASE_URL"))

	if Db, err = gorm.Open("postgres", dbURL); err != nil {
		panic(err)
	}

}
