import './App.css';
import AllPrayersTime from './components/AllPrayersTime';
import PrayerTimer from './components/PrayerTimer';
import { IPrayersTime } from './models/PrayerTime';

const sampleData: IPrayersTime = {
  fajrStart: '04:12',
  fajrEnd: '05:35',
  zuhrStart: '12:16',
  asrStart: '16:45',
  maghribStart: '18:50',
  ishaStart: '20:43'
};

function App() {
  return (
    <div className="App">
      <PrayerTimer allPrayerTime={sampleData} />
      <AllPrayersTime allPrayerTime={sampleData} />
    </div>
  );
}

export default App;
