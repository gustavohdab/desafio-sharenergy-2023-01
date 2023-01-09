import React, { ReactElement, useState } from "react";
import { TableRow } from "../../utils/interfaces";
import { myAPI } from "../../services";
import { fieldLabels } from "../../utils/fieldLabels";
import { UpdateForm } from "./UpdateForm";
import { Button } from "../index";
import { CloseButton, Container, ModalContent } from "./styles";
import { RiCloseLine } from "react-icons/ri";

interface ModalProps {
  selectedRow: TableRow | null;
  children?: React.ReactNode;
  onClose: () => void;
  title?: string;
  showUpdateAndDeleteButtons: boolean;
}

export function Modal({
  selectedRow,
  onClose,
  showUpdateAndDeleteButtons,
}: ModalProps): ReactElement | null {
  if (!selectedRow) {
    return null;
  }
  const [showButtons, setShowButtons] = useState(true);
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const api = myAPI();

  async function deleteCustomer() {
    try {
      await api.delete(`/customer/${selectedRow._id}`);
    } catch (error) {
      console.log(error);
      alert("Erro ao deletar cliente!");
    }
    alert("Cliente deletado com sucesso!");
    onClose();
  }

  return (
    <Container>
      <ModalContent>
        <div>
          <h2>{selectedRow.name}</h2>
          <CloseButton onClick={onClose}>
            <RiCloseLine />
          </CloseButton>
        </div>

        <div>
          {selectedRow.picture && (
            <div>
              <img src={selectedRow.picture} alt={selectedRow.name} />
            </div>
          )}

          <div>
            {showUpdateForm ? (
              <UpdateForm selectedRow={selectedRow} onClose={onClose} />
            ) : (
              Object.entries(selectedRow).map(([field, value]) => {
                if (!fieldLabels[field]) {
                  return null;
                }

                return (
                  <p key={field}>
                    <strong>{fieldLabels[field]}:</strong> {value}
                  </p>
                );
              })
            )}
          </div>
          {showUpdateAndDeleteButtons && showButtons && (
            <div>
              <Button
                title="Atualizar"
                onClick={() => {
                  setShowButtons(false);
                  setShowUpdateForm(true);
                }}
              />
              <Button title="Deletar" onClick={deleteCustomer} />
            </div>
          )}
        </div>
      </ModalContent>
    </Container>
  );
}
