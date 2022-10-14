import "./App.scss";
import { Alert, Card, DatePicker } from "antd";

function App() {
  const prueba_fecha = (date, dateString) => {
    console.log(date, dateString);
  }
  return (
    <div className="app">
      <div>
        <Alert message= 'Succes text' type='succes' />
        <Alert message= 'Succes text' type='succes' />
        <Alert message= 'Succes text' type='succes' />
        <Alert message= 'Succes text' type='succes' />
      </div>
      <label> Selecciona una fecha</label>
      <DatePicker onChange={prueba_fecha}></DatePicker>
      <div>
        <Card
          size='small'
          title='Tarjeta de presentación'
          extra={<a href="#">vermas</a>}
          style={{withd:3000}}>
            <p>Miguel Aguirre</p>
            <p>Desarrollador junior</p>
            </Card>
      </div>
    </div>
  );
  }
export default App;
