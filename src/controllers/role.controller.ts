import type { Request, Response } from 'express'
import { prisma } from '../lib/prisma.js'

export const createRole = async (req: Request, res: Response) => {
    try {
        const { nombre } = req.body;
        if (!nombre) {
            return res.status(400).json({ message: "El nombre es requerido" })
        }

        const roleExists = await prisma.rol.findUnique({ where:{ nombre: nombre.toUpperCase() }})
        if (roleExists) {
            return res.status(400).json({ message: "El rol ya existe" })
        }

        const newRole = await prisma.rol.create({ data: { nombre: nombre.toUpperCase() } })

        res.status(201).json({ message: "Rol creado exitosamente", role: newRole })
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error al crear el rol" })
    }
}

export const getRoles = async (req: Request, res: Response) => {
    try {
        const roles = await prisma.rol.findMany()
        
        return res.status(200).json({ 
            message: roles.length > 0 ? "Roles obtenidos exitosamente" : "No hay roles registrados", 
            roles 
        })
    } catch (error) {
        console.error('Error al obtener roles:', error);
        return res.status(500).json({ message: "Error interno del servidor" })
    }
}