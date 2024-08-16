interface IProps {
  prayerTime: string;
  prayerName: string;
}

const getTimeSuffix = (hour: number) => {
  if (hour < 12) {
    return 'AM';
  } else {
    return 'PM';
  }
};

const PrayerTime = (props: IProps) => {
  const { prayerTime, prayerName } = props;

  const [hourStr, minStr] = prayerTime.split(':');

  const hourNumberValue = Number(hourStr);

  const formattedHourStr =
    hourNumberValue > 12 ? hourNumberValue - 12 : hourStr;

  const timeSuffix = getTimeSuffix(hourNumberValue);

  return (
    <div>
      <h2>{prayerName}</h2>
      <h2>{`${formattedHourStr}:${minStr} ${timeSuffix}`}</h2>
    </div>
  );
};

export default PrayerTime;
