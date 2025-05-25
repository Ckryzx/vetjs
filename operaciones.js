const fs = require('fs');

const registrar = (nombre, edad, animal, color, enfermedad) => {
    const nuevaCita = {
        nombre,
        edad,
        animal,
        color,
        enfermedad
    };

    const citas = JSON.parse(fs.readFileSync('citas.json', 'utf8'));
    citas.push(nuevaCita);
    fs.writeFileSync('citas.json', JSON.stringify(citas, null, 2));
    console.log('Cita registrada con éxito.');
};

const leer = () => {
    const datos = JSON.parse(fs.readFileSync('citas.json', 'utf8'));
    console.log(datos);
};

module.exports = { registrar, leer };