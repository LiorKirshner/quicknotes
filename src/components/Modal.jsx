import { Modal } from "@mantine/core";
import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
dayjs.extend(advancedFormat);

const NoteModal = ({ opened, onClose, note }) => {
  if (!note) return null;

  const formattedDate = dayjs(note.createdAt).format("MMM Do h:mm A");

  return (
    <Modal
      opened={opened}
      onClose={onClose}
      title={note.title || "Note"}
      size="md"
      centered
    >
      <div className="modal-body">
        <p className="modal-text">{note.text}</p>
        <div className="modal-footer">
          <small>Created: {formattedDate}</small>
        </div>
      </div>
    </Modal>
  );
};

export default NoteModal;
