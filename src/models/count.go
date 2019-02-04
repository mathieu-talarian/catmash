package models

import (
	"catmash/src/database"
)

type Count struct {
	Total uint64 `gorm:"notnull" json:"total"`
}

func GetCount() uint64 {
	var total Count
	database.Db.Table("cats").Select("sum(votes) as total").Find(&total)
	return total.Total
}
