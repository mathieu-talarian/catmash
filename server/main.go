package main

import (
	"github.com/gin-gonic/gin"

	_ "catmash/src/database"
)

func main() {
	r := gin.Default()
	v1 := r.Group("api/v1")
	cats := v1.Group("/cats")
	results := v1.Group("/results")
	r.Run()
}
