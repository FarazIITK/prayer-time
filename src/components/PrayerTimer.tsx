import { IPrayersTime } from '../models/PrayerTime';

interface IProps {
  allPrayerTime: IPrayersTime;
}

const PrayerTimer = (props: IProps) => {
  const currentTime = new Date();
  console.log(currentTime);

  return <div>Timer</div>;
};

export default PrayerTimer;
