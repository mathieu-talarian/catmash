package main

import (
	"github.com/gin-contrib/static"
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

func count(r *gin.RouterGroup) {
	count := r.Group("/count")
	count.GET("", controllers.Count)
}

func main() {
	r := gin.Default()
	v1 := r.Group("api/v1")
	cats(v1)
	vote(v1)
	count(v1)
	// results := v1.Group("/results")
	r.Use(static.Serve("/", static.LocalFile("./static/build", true)))
	r.NoRoute(func(c *gin.Context) {
		c.File("./static/build/index.html")
	})
	if err := r.Run(); err != nil {
		panic(err)
	}
}
