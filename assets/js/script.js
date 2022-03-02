//Declaracion de constructor Consultorio
function Consultorio(nombre) {
	this._nombre = nombre
	this._pacientes = []
}

// Prototype para agragar pacientes
Consultorio.prototype.agregarPaciente = function (paciente) {
	this._pacientes.push(paciente)
}

// Prototype para mostrar los pacientes que hay en el consultorio
Consultorio.prototype.listarPacientes = function () {
	//listar pacientes
	this._pacientes.forEach((paciente) => {
		console.log(
			`Paciente: ${paciente._nombre} Edad: ${paciente._edad} Rut: ${paciente._rut} Diagnostico: ${paciente._diagnostico}`
		)
	})
}

// Prototype para buscar paciente por nomnbre y retornar información
Consultorio.prototype.buscarPacienteNombre = function (nombreP) {
	const pacienteEncontrado = this._pacientes.find((paciente) => {
		if (nombreP === paciente.getNombre()) {
			return true
		}
	})
	console.log(pacienteEncontrado)
}

// Declaracion de constructor Paciente
function Paciente() {
	this._nombre = ""
	this._edad = 0
	this._rut = ""
	this._diagnostico = ""
}

//  Seters Paciente
Paciente.prototype.setNombre = function (nombre) {
	this._nombre = nombre
}
Paciente.prototype.setEdad = function (edad) {
	this._edad = edad
}
Paciente.prototype.setRut = function (rut) {
	this._rut = rut
}
Paciente.prototype.setDiagnostico = function (diagnostico) {
	this._diagnostico = diagnostico
}

//  Getters Paciente
Paciente.prototype.getNombre = function () {
	return this._nombre
}
Paciente.prototype.getEdad = function () {
	return this._edad
}
Paciente.prototype.getRut = function () {
	return this._rut
}
Paciente.prototype.getDiagnostico = function () {
	return this._diagnostico
}

// Creando pacientes
const p1 = new Paciente()
p1.setNombre("Kika")
p1.setEdad(15)
p1.setRut("22266565-9")
p1.setDiagnostico("Covid-19")

const p2 = new Paciente()
p2.setNombre("Mario")
p2.setEdad(26)
p2.setRut("123456-9")
p2.setDiagnostico("Covid-19")

const p3 = new Paciente()
p3.setNombre("Jose")
p3.setEdad(33)
p3.setRut("2156545-9")
p3.setDiagnostico("Covid-19")

const p4 = new Paciente()
p4.setNombre("Esperanza")
p4.setEdad(25)
p4.setRut("45678-9")
p4.setDiagnostico("Llego muerta")

// Creando consultorio
const cesfamAguirre = new Consultorio("Cesfam Aguirre")
cesfamAguirre.agregarPaciente(p1)
cesfamAguirre.agregarPaciente(p2)
cesfamAguirre.agregarPaciente(p3)
cesfamAguirre.agregarPaciente(p4)

// Mostrando Información
console.log(cesfamAguirre)
cesfamAguirre.listarPacientes()
cesfamAguirre.buscarPacienteNombre("Jose")
