package controllers

import (
	"catmash/src/models"
	"fmt"
	"github.com/gin-gonic/gin"
	"log"
	"math"
	"net/http"
)

// K factor
var K = 24.0

type VoteResult struct {
	Cat1 struct {
		Id    int  `json:"id"`
		Voted bool `json:"voted"`
	} `json:"cat1"`
	Cat2 struct {
		Id    int  `json:"id"`
		Voted bool `json:"voted"`
	} `json:"cat2"`
}

func newRatingWinning(winner *models.Cats, ratingDiff float64) {
	winner.Rating = winner.Rating + K*(float64(1)-ratingDiff)
}

func newRatingLosing(looser *models.Cats, ratingDiff float64) {
	looser.Rating = looser.Rating + K*(float64(0)-ratingDiff)
}

/*
return 	rating1 -> probability of cat1 wins
		rating2 -> probability of cat2 wins
 */
func calcRating(cat1, cat2 models.Cats) (float64, float64) {
	return float64(1.0) / (float64(1.0) + math.Pow(10, float64(cat2.Rating-cat1.Rating)/float64(400))),
		float64(1.0) / (float64(1.0) + math.Pow(10, float64(cat1.Rating-cat2.Rating)/float64(400)))
}

func Vote(c *gin.Context) {
	var res VoteResult
	if err := c.BindJSON(&res); err != nil {
		log.Println(err)
		c.Status(http.StatusBadRequest)
		return
	}
	cat1 := models.GetCat(res.Cat1.Id)
	cat2 := models.GetCat(res.Cat2.Id)
	rating1, rating2 := calcRating(cat1, cat2)
	// if cat1 wins
	if res.Cat1.Voted {
		newRatingWinning(&cat1, rating1)
		newRatingLosing(&cat2, rating1)
	} else if res.Cat2.Voted {
		newRatingWinning(&cat2, rating2)
		newRatingLosing(&cat1, rating2)
	}
	fmt.Println(cat1, cat2)
	cat1.Update()
	cat2.Update()
	c.JSON(200, gin.H{})
}
