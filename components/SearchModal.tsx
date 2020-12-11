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
import { ChangeEvent, FC, useCallback, useEffect, useState } from "react";
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
    setValue(e.target.value);
  };

  const onKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      switch (e.key) {
        case "Enter": {
          if (!isInvalid) {
            onClose();
            router.push(`/player/${encodeURIComponent(value)}`);
          }
          break;
        }
      }
    },
    [value, router]
  );

  /** Checks the validity of a username **/
  useEffect(() => {
    if (!ValidUsernames.test(value)) {
      setValidity(true);
    } else {
      setValidity(false);
    }
  }, [value]);

  /** Clears input value **/
  useEffect(() => {
    setValue("");
  }, [isOpen]);

  return (
    <>
      <Modal size="lg" isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent overflow="hidden">
          <InputGroup>
            <InputLeftElement h="48px">
              <SearchIcon my={0} />
            </InputLeftElement>
            <Input
              autoComplete="off"
              autoCorrect="off"
              spellCheck="false"
              placeholder="Введите ник"
              variant="filled"
              focusBorderColor="transparent"
              borderColor="transparent"
              h="48px"
              maxLength={16} // 16 is the maximum length of a username
              onChange={handleInput}
              isInvalid={isInvalid}
              value={value}
              onKeyDown={onKeyDown}
            />
            <InputRightElement h="48px">
              <span>
                <Kbd> ↵ </Kbd>
              </span>
            </InputRightElement>
          </InputGroup>
        </ModalContent>
      </Modal>
    </>
  );
};

export default SearchModal;
