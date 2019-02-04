package database

import (
	"fmt"
	"os"

	"github.com/jinzhu/gorm"

	// psql dialect for gorm
	_ "github.com/jinzhu/gorm/dialects/postgres"
)

var Db *gorm.DB

func init() {
	var err error
	if databaseURL := os.Getenv("DATABASE_URL"); databaseURL != "" {
		fmt.Println(databaseURL)
		if Db, err = gorm.Open("postgres", databaseURL); err != nil {
			panic(err)
		}
	} else {
		if Db, err = gorm.Open("postgres", "postgres://mathieumoullec:root@localhost/catmash?sslmode=disable"); err != nil {
			panic(err)
		}
	}

}
