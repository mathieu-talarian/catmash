package main

import (
	"github.com/gin-gonic/gin"

	"catmash/src/controllers"
	_ "catmash/src/database"
)

func cats(r *gin.RouterGroup) {
	cats := r.Group("/cats")
	cats.POST("/install", controllers.InstallCats)
	cats.GET("/all/ordered", controllers.GetAllCatsOrdered)
	cats.GET("", controllers.GetCats)
}

func vote(r *gin.RouterGroup) {
	vote := r.Group("/vote")
	vote.POST("", controllers.Vote)
}

func main() {
	r := gin.Default()
	v1 := r.Group("api/v1")
	cats(v1)
	vote(v1)
	// results := v1.Group("/results")
	if err := r.Run(); err != nil {
		panic(err)
	}
}
