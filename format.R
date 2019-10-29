library(jsonlite)
library(dplyr)

data <- jsonlite::fromJSON("clean_data.json")

data$descripcion <- gsub('Detalles: ', '', data$descripcion)

write.csv(data, file = "veterinarias.csv")
