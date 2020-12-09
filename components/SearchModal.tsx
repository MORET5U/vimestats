import { SearchIcon } from "@chakra-ui/icons";
import {
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Kbd,
  Modal,
  ModalContent,
  ModalOverlay,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { ChangeEvent, FC, FormEvent, useState } from "react";
import { ValidUsernames } from "utils/regulars";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  setValue: (newValue: string) => void;
  value: string;
}

const SearchModal: FC<SearchModalProps> = ({ isOpen, onClose, value, setValue }) => {
  const router = useRouter();
  const [isInvalid, setValidity] = useState(false);

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    setValue(inputValue);
    if (!ValidUsernames.test(inputValue)) {
      setValidity(true);
    } else {
      setValidity(false);
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isInvalid) {
      router.push(`/player/${encodeURIComponent(value)}`);
    }
  };

  return (
    <>
      <Modal size="lg" isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <form onSubmit={handleSubmit}>
            <InputGroup>
              <InputLeftElement>
                <SearchIcon />
              </InputLeftElement>
              <Input
                value={value}
                placeholder="Введите ник"
                variant="filled"
                focusBorderColor="transparent"
                borderColor="transparent"
                size="md"
                onChange={handleInput}
                isInvalid={isInvalid}
              />
              <InputRightElement>
                <span>
                  <Kbd> ↵ </Kbd>
                </span>
              </InputRightElement>
            </InputGroup>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
};

export default SearchModal;
