import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";

dayjs.extend(advancedFormat);

export const formatDate = (timestamp) => {
  return dayjs(timestamp).format("MMM Do h:mm A");
};

export const formatNoteDates = (note) => {
  const createdDate = formatDate(note.createdAt);
  const editedDate = note.editedAt ? formatDate(note.editedAt) : null;

  return {
    createdDate,
    editedDate,
  };
};
