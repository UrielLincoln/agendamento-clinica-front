

export default function Header(){
    return(
      <nav class="navbar navbar-icon-top navbar-expand-lg navbar-dark bg-dark">
 
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="/Home">
          <i class="fa fa-home"></i>
          Home
          </a>
      </li>

      <li class="nav-item active">
        <a class="nav-link" href="/Agendamentos">
          <i class="fa fa-home"></i>
          Agendamento
          </a>
      </li>

      <li class="nav-item active">
        <a class="nav-link" href="/Pacientes">
          <i class="fa fa-home"></i>
          Pacientes
          </a>
      </li>
      <li class="nav-item active">
        <a class="nav-link" href="/Medico">
          <i class="fa fa-home"></i>
          Medicos
          </a>
      </li>
    </ul>
  </div>
</nav>


    );
}