import React, { useState } from 'react';
import {
  ThemeProvider,
  createTheme,
  Stack,
  Divider,
} from '@mui/material';
import NovoEventoButton from '../../components/botoes/btnNovoEvento';
import SelecionarPeriodo from '../../components/botoes/btnDia';
import SearchButton from '../../components/botoes/btnSearch';
import PrintButton from '../../components/botoes/btnPrint';
import ProfileActions from '../../components/perfil/profileActions';
import NavBar from '../../components/navBar/navBar';
import DateInput from '../../components/calendar/CalendarComponent';
import DayMeeting from '../../components/meeting/dayMetting';
import ListaReunioes from '../../components/meeting/dayMetting';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#f50057',
    },
  },
});

// Função principal para a HomePageUser
const HomePageUser: React.FC = () => {
  // Estado para armazenar o período selecionado (Dia, Semana ou Mes)
  const [periodo, setPeriodo] = useState<'Dia' | 'Semana' | 'Mes'>('Dia');

  // Estado para armazenar a data selecionada
  const [data, setData] = useState<string>(new Date().toISOString().slice(0, 10)); // Define data de hoje como padrão

  // Função para lidar com a mudança de período
  const handlePeriodChange = (newPeriodo: 'Dia' | 'Semana' | 'Mes') => {
      setPeriodo(newPeriodo);
      console.log(`Período selecionado: ${newPeriodo}`);
  };

  // Função para lidar com a mudança de data
  const handleDateChange = (date: string) => {
      setData(date);
      console.log('Data selecionada:', date);
  };

  // Função para lidar com a pesquisa
  const handleSearch = (text: string) => {
      console.log(`Texto pesquisado: ${text}`);
      // Aqui, você pode adicionar lógica para lidar com a pesquisa
  };

  // Função para lidar com o clique no botão novo evento
  const handleNovoEventoClick = () => {
      console.log('Teste BTN novo Evento!');
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <Stack flexDirection="row" sx={{ width: '100%' }}>
        <Stack height="100vh" flexDirection="row" marginRight={1}>
          <NavBar />
          <Divider orientation="vertical" />
        </Stack>

        <Stack width="100%">
          <Stack flexDirection="row" height={40} padding={1} margin="1rem 3rem 1rem 0rem" justifyContent="space-between" width="auto">
            <NovoEventoButton onClick={handleNovoEventoClick} />
            <SelecionarPeriodo onPeriodoChange={handlePeriodChange} />
            <SearchButton onSearch={handleSearch} />
            <PrintButton />
            <ProfileActions />
          </Stack>

          <Divider />

          <Stack marginTop={3}>
            <Stack width="auto" margin={1} marginBottom={3}>
              <DateInput onDateChange={handleDateChange} formatDate={periodo} data={data} />
            </Stack>

            <Stack>
              <ListaReunioes/>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </ThemeProvider>
  );
};

export default HomePageUser;
