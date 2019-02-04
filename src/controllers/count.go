package controllers

import (
	"catmash/src/models"
	"github.com/gin-gonic/gin"
)

func Count(c *gin.Context) {
	c.JSON(200, gin.H{
		"total": models.GetCount(),
	})
}
