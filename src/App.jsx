
import './App.css'
import { User,MessageCircle ,X,Heart} from 'lucide-react';



const ProfileSelector = () => {
  <div className="rounded-lg overflow-hidden bg-white shadow-lg">
  <div className="relative">
    console.log(`okkkkk`);
    <img src="http://127.0.0.1:8081/src/main/resources/static/images/dba38030-27cb-4a57-92c4-96d45c0c8173.png"/>
    <div className="absolute bottom-0 left-0 right-0 text-white p-4 bg-gradient-to-t from-black">
      <h2 className='text-3xl font-bold'>Foo Bar,30</h2>
    </div>
  </div>

</div>
}

function App() {

  return (
    <div className="max-w-md mx-auto p-4">
    <nav className="flex justify-between mb-4">
      <User/>
      <Heart/>
      <MessageCircle/>
    </nav>
    <ProfileSelector/>
  </div>
  )
}

export default App
