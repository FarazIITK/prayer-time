import { IPrayersTime } from '../models/PrayerTime';
import PrayerTime from './PrayerTime';

interface IProps {
  allPrayerTime: IPrayersTime;
}

const allPrayers = [
  {
    name: 'Fajr Start',
    propertyName: 'fajrStart'
  },

  {
    name: 'Fajr End',
    propertyName: 'fajrEnd'
  },
  {
    name: 'Zuhr Start',
    propertyName: 'zuhrStart'
  },
  {
    name: 'Asr Start',
    propertyName: 'asrStart'
  },
  {
    name: 'Maghrib Start',
    propertyName: 'maghribStart'
  },
  {
    name: 'Isha Start',
    propertyName: 'ishaStart'
  }
];

const AllPrayersTime = (props: IProps) => {
  const { allPrayerTime } = props;
  return (
    <div>
      {allPrayers.map((pyrTime) => {
        return (
          <PrayerTime
            prayerTime={
              allPrayerTime[
                pyrTime.propertyName as keyof IPrayersTime
              ]
            }
            prayerName={pyrTime.name}
          />
        );
      })}
    </div>
  );
};

export default AllPrayersTime;
