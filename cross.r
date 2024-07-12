# load the library
library(crossword.r)
library(jsonlite)

# set seed for pseudo random number generator
# set.seed(143)

inputdata <- read_json("./src/components/namecross/workers.json", simplifyVector = TRUE)

# create a new 4 by 4 crossword
cw <- Crossword$new(rows = 10, columns = 10)
my_wordlist <- data.frame(
    words = inputdata$name,
    clues = inputdata$nameClue
)
cw_words <- my_wordlist[sample(nrow(my_wordlist)), ]

cw$add_words(
    words = cw_words$words,
    clues = cw_words$clues
)
print(cw)
exportJson <- toJSON(cw$words)
write(exportJson, "./src/components/namecross/crossInfo.json")
