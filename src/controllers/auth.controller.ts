import type { Request, Response } from "express";
import { prisma } from "../lib/prisma.js";
import bcrypt from "bcrypt";

const register = async (req: Request, res: Response) =>{
    try {
        const { email, password, nombre, apellidoPaterno, apellidoMaterno } = req.body; 

        if(!email || !password || !nombre || !apellidoPaterno || !apellidoMaterno){
            return res.status(400).json({ message: "Todos los campos son requeridos" });
        }

        const userExists = await prisma.usuario.findUnique({ where: { email } });

        if(userExists){
            return res.status(400).json({ message: "El usuario ya existe" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await prisma.usuario.create({
            data: {
                email,
                nombre,
                apellidoPaterno,
                apellidoMaterno,
                estadoUsuario: 1,
                idRol: 1,
                credencial: {
                    create: {
                        passwordHash: hashedPassword,
                    },
                },
            },
        });
        res.status(201).json({
            message: "Usuario registrado exitosamente",
            user: newUser.email,
        })
        
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error al registrar usuario" });
    }
}

const login = async (req: Request, res: Response) =>{
    
}

const logout = async (req: Request, res: Response) =>{
    
}

const profile = async (req: Request, res: Response) =>{
    
}

export { register, login, logout, profile }