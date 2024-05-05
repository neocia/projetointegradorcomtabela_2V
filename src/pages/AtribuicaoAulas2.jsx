import "datatables.net-dt/css/dataTables.dataTables.css";
import "datatables.net-buttons-dt/css/buttons.dataTables.css";
import "datatables.net-buttons-dt/css/buttons.dataTables.min.css";
import "datatables.net-buttons/js/buttons.html5.mjs";
import "datatables.net-buttons/js/buttons.print.js";
import "datatables.net-buttons/js/buttons.colVis.js";
import "https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js";

import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";

import MenuApp from "../components/MenuApp";
import ReactDataTables from "../components/Tabela";

const columns = [
  { data: "nomeProfessor", title: "Professor" },
  { data: "nomeProfessorEventual", title: "Professor Eventual" },
  { data: "UA", title: "Unidade Administrativa" },
  { data: "CIE", title: "CIE" },
  { data: "ciclo", title: "Ciclo" },
  { data: "Data", title: "Data" },
  { data: "HoraInicioAula", title: "Hora Inicio" },
  { data: "HoraFimAula", title: "Hora Fim" },
  { data: "turno", title: "Turno" },
  { data: "turma", title: "Turma" },
  {data: null, title: "Editar"},
  {data: null, title: "Excluir"},

];

const layout = {
  topStart: {
    buttons: [
      "pageLength",
      {
        text: "My button",
        action: function (e, dt, node, config) {
          alert("Button activated");
        },
      },
      {
        extend: "copy",
        text: "Copy to clipboard",
      },
      "csv",
      "excel",
      "pdf",
      "print",
    ],
  },
};

const columnDefs = [
  {
      data: "null",
      defaultContent: '<button id="editar">Editar</button>',
      targets: -2
  },
  {
    data: "null",
    defaultContent: '<button id="excluir">Excluir</button>',
    targets: -1
  }
]


const EmployeeTable = () => {
  pdfMake.vfs = pdfFonts.pdfMake.vfs;

  return (
    <>
      <MenuApp />

      <ReactDataTables
        columns={columns}
        destroy={true}
        layout={layout}
        ajax={"https://nestjs-sgcpe-api.vercel.app/atribuicao_aulas/view"}
        columnDefs ={columnDefs}
      />
    </>
  );
};

export default EmployeeTable;
