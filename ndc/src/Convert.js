import moment from "moment";

  const mapAgenda = (agenda) => {
    return agenda.reduce((groups, item) => {
      if (!groups[item.day]) {
        groups[item.day] = [];
      }
      groups[item.day].push(item);
      return groups;
    }, {});
  };
  
  
  const mapTalk = (talk) => {
    return talk.reduce((groups, item) => {
      const time= moment(item.startTime).format("hh:mm")+ "-" + moment(item.endTime).format("hh:mm");
      if (!groups[time]) {
        groups[time] = [];
      }
      groups[time].push(item);
      return groups;
    }, {});
  };
  export { mapAgenda,mapTalk };
  