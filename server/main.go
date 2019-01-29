package main

import (
	"github.com/gin-gonic/gin"

	"catmash/src/controllers"
	_ "catmash/src/database"
)

func main() {
	r := gin.Default()
	v1 := r.Group("api/v1")
	cats := v1.Group("/cats")
	{
		cats.POST("/all", controllers.AllCats)
		cats.GET("", controllers.GetCats)
	}
	// results := v1.Group("/results")b
	r.Run()
}
