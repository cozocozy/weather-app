export default function updateGlassEffect(weather) {
  switch (weather.toLowerCase()) {
    case 'clear':
      return 'bg-white/30 backdrop-blur-xl'; // Cerah → lebih transparan
    case 'clouds':
      return 'bg-gray-400/40 backdrop-blur-md'; // Berawan → agak gelap
    case 'rain':
      return 'bg-blue-500/30 backdrop-blur-lg'; // Hujan → kebiruan
    case 'snow':
      return 'bg-white/50 backdrop-blur-2xl'; // Salju → lebih tebal
    case 'thunderstorm':
      return 'bg-gray-700/40 backdrop-blur-sm'; // Badai → lebih gelap
    default:
      return 'bg-white/30 backdrop-blur-lg'; // Default glassmorph
  }
}