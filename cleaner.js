const fs = require('fs')

let rawdata = fs.readFileSync('output.json')
let data = JSON.parse(rawdata)

let result = []

data.forEach( (page)=> {
	
	page.description.forEach( (desc, index)=> {
		if( desc[0] === "Dirección:\n              " ) {
			page.description.splice(index, 1)
		}
	})
})

data[6].description.shift()

data.forEach( (page)=> {

	page.names.forEach( (name, index)=> {
		result.push({
			nombre: name,
			direccion: page.description[index][0].split('Dirección:\n')[1].trim(),
			telefono: page.description[index][1].split('Teléfono: ')[1].replace(/ /g, ''),
			email: page.description[index][2].split(' ')[1],
			descripcion: page.description[index][4]
		})
	})

})


fs.writeFileSync('clean_data.json', JSON.stringify(result));