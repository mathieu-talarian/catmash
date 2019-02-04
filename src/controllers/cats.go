package controllers

import (
	"catmash/src/models"
	"math/rand"
	"net/http"

	"github.com/gin-gonic/gin"
)

func InstallCats(c *gin.Context) {
	if err := models.InstallCats(); err != nil {
		c.Status(http.StatusInternalServerError)
		return
	}
	c.Status(http.StatusOK)
}

func getNumbers() (num1, num2 int) {
	num1 = rand.Intn(100)
	num2 = rand.Intn(100)
	if num1 > 0 && num2 > 0 && num1 != num2 {
		return
	}
	return getNumbers()
}

func GetCats(c *gin.Context) {
	num1, num2 := getNumbers()
	cat1 := models.GetCat(num1)
	cat2 := models.GetCat(num2)
	c.JSON(200, gin.H{
		"cat1": cat1,
		"cat2": cat2,
	})
}

func GetAllCatsOrdered(c *gin.Context) {
	c.JSON(200, gin.H{"cats": models.All()})
}
