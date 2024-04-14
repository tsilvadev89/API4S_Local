import React from 'react';
import { Stack, Typography } from '@mui/material';
import ItemReuniao from './cardMetting';


const ListaReunioes: React.FC = () => {
// Dados teóricos de reuniões
const reunioes = [
    {
        nome: 'Reunião de Planejamento',
        inicio: '09:00',
        termino: '10:30',
        tipoReuniao: 'Presencial'
    },
    {
        nome: 'Reunião de Alinhamento',
        inicio: '11:00',
        termino: '12:00',
        tipoReuniao: 'Online'
    },
    {
        nome: 'Reunião de Projeto',
        inicio: '14:00',
        termino: '15:30',
        tipoReuniao: 'Hibrido'

    },
    {
        nome: 'Reunião de Feedback',
        inicio: '13:00',
        termino: '14:00',
        tipoReuniao: 'Presencial'
    },
    {
        nome: 'Reunião de Equipe',
        inicio: '16:00',
        termino: '17:30',
        tipoReuniao: 'Online'
    },
    {
        nome: 'Reunião de Revisão',
        inicio: '10:00',
        termino: '11:00',
        tipoReuniao: 'Hibrido'

    },
    {
        nome: 'Reunião de Planejamento Estratégico',
        inicio: '09:30',
        termino: '11:00',
        tipoReuniao: 'Presencial'
    },
    {
        nome: 'Reunião de Projeto Especial',
        inicio: '15:00',
        termino: '16:30',
        tipoReuniao: 'Online'
    },
    {
        nome: 'Reunião de Status',
        inicio: '12:30',
        termino: '13:30',
        tipoReuniao: 'Hibrido'

    },
    {
        nome: 'Reunião de Treinamento',
        inicio: '14:00',
        termino: '15:00',
        tipoReuniao: 'Presencial'
    },
    {
        nome: 'Reunião de Desenvolvimento',
        inicio: '11:30',
        termino: '12:30',
        tipoReuniao: 'Online'
    },
    {
        nome: 'Reunião de Coordenação',
        inicio: '16:30',
        termino: '18:00',
        tipoReuniao: 'Hibrido'

    },
    {
        nome: 'Reunião de Atualização',
        inicio: '13:00',
        termino: '14:00',
        tipoReuniao: 'Presencial'
    }
];


    return (
        <Stack spacing={2}>
            <Typography variant="h5" gutterBottom>
                Lista de Reuniões
            </Typography>
            {/* Renderiza cada item de reunião */}
            {reunioes.map((reuniao, index) => (
                <ItemReuniao
                    key={index}
                    nome={reuniao.nome}
                    inicio={reuniao.inicio}
                    termino={reuniao.termino}
                    tipoReuniao={reuniao.tipoReuniao}
                />
            ))}
        </Stack>
    );
};

export default ListaReunioes;
