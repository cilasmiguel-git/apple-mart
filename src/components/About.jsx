import React from 'react'
import { NavLink } from 'react-router-dom'
const About = () => {
  return (
    <div className="container py-5 my-5">
      <div className="row">
        <div className="col-md-6">
          <h1 className='text-primary fw-bold mb-4'>About Us</h1>
          <p className="lead mb-4">
            "Bem-vindo à nossa loja de iPhones, onde oferecemos os melhores dispositivos da Apple com preços competitivos.

            Somos apaixonados por tecnologia e acreditamos que os iPhones são os melhores smartphones no mercado. Por isso, trabalhamos duro para oferecer aos nossos clientes uma ampla variedade de modelos e acessórios, além de garantir que todos os nossos produtos estejam sempre atualizados e em perfeito estado.

            Temos um time de especialistas em tecnologia que está sempre disponível para responder suas perguntas e ajudá-lo a encontrar o iPhone perfeito para você. Além disso, oferecemos uma garantia de devolução do dinheiro de 30 dias, para que você possa comprar com confiança.

            Obrigado por escolher a nossa loja e esperamos ter a oportunidade de atendê-lo em breve. Entre em contato conosco se tiver alguma dúvida ou precisar de ajuda. "
          </p>
          <NavLink to="/contact" className="btn btn-outline-primary px-3">Contact Us</NavLink>
        </div>
        <div className="col-md-6 d-flex justify-content-center">
          <img src="/assets/images/about.png" alt="About Us" height="500px" width='550px' />
        </div>
      </div>
    </div>
  )
}

export default About