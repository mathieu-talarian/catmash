package models

import (
	"github.com/jinzhu/gorm"
)

type Cats struct {
	gorm.Model
	Image string `gorm:"type:varchar(500)"`
	UUID  string `gorm:"type:varchar(500)"`
}
