import "./index.css"


export default function Paciente(){

    return(
        <body>
    <div class="container">
        <div class="table-wrapper">
            <div class="table-title">
                <div class="row">
                    <div class="col-sm-8"><h2>Pacientes</h2></div>
                    <div class="col-sm-4">
                        <button type="button" class="btn btn-info add-new"><i class="fa fa-plus"></i>Adicionar novo</button>
                    </div>
                </div>
            </div>
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>CPF</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Joao</td>
                        <td>joao@email.com</td>
                        <td>999.999.999-00</td>
                    </tr>
                    <tr>
                        <td>Pedro Silva</td>
                        <td>pedro@email.com</td>
                        <td>123.123.123-00</td>
                    </tr>    
                </tbody>
            </table>
        </div>
    </div>     
</body>


    );



}