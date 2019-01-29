package controllers

import (
	"catmash/src/models"
	"fmt"
	"math/rand"

	"github.com/gin-gonic/gin"
)

func AllCats(c *gin.Context) {
	fmt.Println("all")
	models.InstallCats()
}

func GetCats(c *gin.Context) {
	cat1 := models.GetCat(rand.Intn(100))
	cat2 := models.GetCat(rand.Intn(100))
	c.JSON(200, gin.H{
		"cat1": cat1,
		"cat2": cat2,
	})
}
