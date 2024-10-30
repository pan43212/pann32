import { useState } from 'react'
import { Star, Mail, Phone, MapPin } from 'lucide-react'

export default function Component() {
  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [mensaje, setMensaje] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica para enviar el formulario
    console.log('Formulario enviado', { nombre, email, mensaje })
    // Resetear el formulario
    setNombre('')
    setEmail('')
    setMensaje('')
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-pink-100">
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-purple-600">Niñera Confiable</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#inicio" className="text-purple-600 hover:text-purple-800">Inicio</a></li>
              <li><a href="#servicios" className="text-purple-600 hover:text-purple-800">Servicios</a></li>
              <li><a href="#testimonios" className="text-purple-600 hover:text-purple-800">Testimonios</a></li>
              <li><a href="#contacto" className="text-purple-600 hover:text-purple-800">Contacto</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section id="inicio" className="text-center mb-16">
          <h2 className="text-4xl font-bold text-purple-700 mb-4">Cuidado infantil de confianza</h2>
          <p className="text-xl text-gray-600 mb-8">Brindo un ambiente seguro y divertido para tus hijos</p>
          <img src="/placeholder.svg?height=300&width=300" alt="Niñera sonriente con niños" className="rounded-full mx-auto shadow-lg" />
        </section>

        <section id="servicios" className="mb-16">
          <h2 className="text-3xl font-bold text-purple-700 mb-6 text-center">Mis Servicios</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-purple-600">Cuidado a tiempo completo</h3>
              <p className="text-gray-600">Atención dedicada durante todo el día para tus pequeños.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-purple-600">Cuidado después de la escuela</h3>
              <p className="text-gray-600">Supervisión y ayuda con las tareas después del horario escolar.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-purple-600">Cuidado ocasional</h3>
              <p className="text-gray-600">Disponible para eventos especiales o salidas nocturnas.</p>
            </div>
          </div>
        </section>

        <section id="testimonios" className="mb-16">
          <h2 className="text-3xl font-bold text-purple-700 mb-6 text-center">Lo que dicen las familias</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Star className="text-yellow-400 w-5 h-5" />
                <Star className="text-yellow-400 w-5 h-5" />
                <Star className="text-yellow-400 w-5 h-5" />
                <Star className="text-yellow-400 w-5 h-5" />
                <Star className="text-yellow-400 w-5 h-5" />
              </div>
              <p className="text-gray-600 mb-2">"¡La mejor niñera que hemos tenido! Nuestros hijos la adoran."</p>
              <p className="font-semibold">- Familia Rodríguez</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Star className="text-yellow-400 w-5 h-5" />
                <Star className="text-yellow-400 w-5 h-5" />
                <Star className="text-yellow-400 w-5 h-5" />
                <Star className="text-yellow-400 w-5 h-5" />
                <Star className="text-yellow-400 w-5 h-5" />
              </div>
              <p className="text-gray-600 mb-2">"Siempre puntual y muy profesional. Nos da mucha tranquilidad."</p>
              <p className="font-semibold">- Familia Gómez</p>
            </div>
          </div>
        </section>

        <section id="contacto" className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold text-purple-700 mb-6 text-center">Contáctame</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="nombre" className="block text-gray-700 font-bold mb-2">Nombre</label>
                  <input
                    type="text"
                    id="nombre"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="mensaje" className="block text-gray-700 font-bold mb-2">Mensaje</label>
                  <textarea
                    id="mensaje"
                    value={mensaje}
                    onChange={(e) => setMensaje(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                    rows={4}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="bg-purple-600 text-white font-bold py-2 px-4 rounded-md hover:bg-purple-700 transition duration-300">
                  Enviar Mensaje
                </button>
              </form>
            </div>
            <div>
              <div className="flex items-center mb-4">
                <Mail className="text-purple-600 w-6 h-6 mr-2" />
                <span>correo@ejemplo.com</span>
              </div>
              <div className="flex items-center mb-4">
                <Phone className="text-purple-600 w-6 h-6 mr-2" />
                <span>+1 234 567 890</span>
              </div>
              <div className="flex items-center">
                <MapPin className="text-purple-600 w-6 h-6 mr-2" />
                <span>Ciudad, País</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-purple-700 text-white py-4 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Niñera Confiable. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}