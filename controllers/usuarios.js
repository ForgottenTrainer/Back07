const { request } = require('express');
const { response } = require('express')


const usuariosGet = (req = request, res) => {

    const { q, nombre = 'pro`nt', apikey , limit, page} = req.query;

    res.json({
        msg:"Get API - controlador",
        q,
        nombre,
        apikey,
        limit,
        page
    })
}

const usuariosPost = (req, res) => {

    const {nombre, edad} = req.body;

    res.json({
        msg:"Post API - controlador",
        nombre,
        edad
    })
}

const usuariosPut = (req, res) => {

    const {id} = req.params.id;

    res.status(404).json({
        msg:"Put API - controlador",
        id
    })
}

const usuariosPatch = (req, res) => {
    res.json({
        msg:"Patch API - controller"
    })
}

const usuariosDelete = (req, res) => {
    res.json({
        msg:"Delete API - controller"
    })
}

module.exports = {
    usuariosPut,
    usuariosGet,
    usuariosPost,
    usuariosPatch,
    usuariosDelete

}