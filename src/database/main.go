package database

import (
	"github.com/jinzhu/gorm"

	// psql dialect for gorm
	_ "github.com/jinzhu/gorm/dialects/postgres"
)

var Db *gorm.DB

func init() {
	var err error
	if Db, err = gorm.Open("postgres", "postgres://mathieumoullec:root@localhost/catmash?sslmode=disable"); err != nil {
		panic(err)
	}
}
