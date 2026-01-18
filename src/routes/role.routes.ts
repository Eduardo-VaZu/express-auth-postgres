import { Router } from 'express';
import { createRole, getRoles } from '../controllers/role.controller.js';

export const roleRouter = Router();

roleRouter.post('/', createRole);
roleRouter.get('/', getRoles);
