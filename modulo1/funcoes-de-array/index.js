const usuarios = [
    { nome: "Amanda Rangel", apelido: "mandi"
{ nome: "Laís Petra", apelido:"Laura"},
{ nome: "Letícia Chijo", apelido: "Chijo"}
]

const novoArrayA = usuarios.map((item, index, array) => {
    console.log(item, index, array)
})