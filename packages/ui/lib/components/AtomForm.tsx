import { useState } from 'react';
import { Spinner } from './Spinner';
import { useMultiVault, useMutation, useStorage, useWaitForTransactionEvents } from '@extension/shared';
import { pinThingMutation } from '@extension/shared';
import { currentTabStorage } from '@extension/storage';

export const AtomForm = ({ refetch }: { refetch: () => void }) => {
  const wait = useWaitForTransactionEvents();
  const [progressMessage, setProgressMessage] = useState<string | undefined>(undefined);
  const [errorMessage, setErrorMessage] = useState<string | undefined>(undefined);
  const { multivault } = useMultiVault();
  const [creatingAtom, setCreatingAtom] = useState(false);
  const [pinThing] = useMutation(pinThingMutation);

  const currentTab = useStorage(currentTabStorage);
  const [label, setLabel] = useState(currentTab?.title || '');
  const [description, setDescription] = useState(currentTab?.description || '');
  const [image, setImage] = useState(currentTab?.image || '');
  const [loading, setLoading] = useState(false);

  async function handleCreateAtom(): Promise<void> {
    if (!currentTab?.url) {
      return;
    }
    let finalUri = currentTab.url;
    setCreatingAtom(true);
    console.log('creating atom', { currentTab });
    if (currentTab.type === 'url') {
      setProgressMessage('Uploading to IPFS...');
      const result = await pinThing({
        variables: {
          thing: {
            name: label,
            description,
            url: currentTab.url,
            image: currentTab.image,
          },
        },
      });

      if (!result.data?.pinThing?.uri) {
        throw new Error('Failed to pin thing');
      }
      finalUri = result.data.pinThing.uri;
    }

    try {
      setProgressMessage('Creating atom...');
      const { hash } = await multivault.createAtom({
        uri: finalUri,
      });

      console.log(`Transaction hash: ${hash}`);
      await wait(hash);
    } catch (error: any) {
      console.log('Error during deposit:', error.message);
      setErrorMessage(error.message);
    }
    setProgressMessage(undefined);
    setCreatingAtom(false);
    refetch();
  }

  return (
    <div className="bg-slate-700 p-2">
      <div className="flex flex-col p-4 bg-slate-800 rounded-lg">
        <div className="flex items-center space-x-4 mb-3">
          {image && <img src={image} className="w-16 h-16 rounded-full object-cover object-center" />}
          <div>
            <h2
              className="text-xl font-bold text-slate-200"
              contentEditable
              suppressContentEditableWarning
              onBlur={e => setLabel(e.target.innerText)}>
              {label}
            </h2>
          </div>
        </div>
        <p
          className="text-sm text-slate-300 mt-2"
          contentEditable
          suppressContentEditableWarning
          onBlur={e => setDescription(e.target.innerText)}>
          {description}
        </p>

        <div className="flex flex-row mt-3 space-x-1">
          <button
            onClick={handleCreateAtom}
            className={`space-x-1 flex flex-row items-center border border-sky-800 hover:bg-sky-700 text-green-100 text-xs p-1 px-2 rounded-full`}>
            {creatingAtom ? <Spinner /> : <span className="text-sm">✓</span>}
            {progressMessage && <span className="text-sm ml-2">{progressMessage}</span>}
          </button>
          {errorMessage && <span className="text-sm ml-2 text-red-500">{errorMessage}</span>}
        </div>
      </div>
    </div>
  );
};
