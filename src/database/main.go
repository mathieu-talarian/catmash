package database

import (
	"github.com/jinzhu/gorm"

	// psql dialect for gorm
	_ "github.com/jinzhu/gorm/dialects/postgres"
)

var Db *gorm.DB

var dbURL = "postgres://wgymvabygmqkwq:b099cbe98be58be74e29d098fdbdccbdd36d23beba9283dec2d96b10d0f46f8a@ec2-54-228-212-134.eu-west-1.compute.amazonaws.com:5432/do6oectkou78l"

func init() {
	var err error

	if Db, err = gorm.Open("postgres", dbURL); err != nil {
		panic(err)
	}

}
