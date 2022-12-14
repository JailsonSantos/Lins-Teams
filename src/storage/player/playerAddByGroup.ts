import { AppError } from '@utils/AppError';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { PLAYER_COLLECTION } from '@storage/storageConfig';

import { PlayerStorageDTO } from './PlayerStorageDTO';
import { playersGetByGroup } from './playersGetByGroup';


export async function playerAddByGroup(newPlayer: PlayerStorageDTO, group: string) {
  try {

    const storadPlayers = await playersGetByGroup(group);

    const playerAlreadyExists = await storadPlayers.filter(player => player.name === newPlayer.name);

    if (playerAlreadyExists.length > 0) {
      throw new AppError('Essa pessoa já esta adicionada em um time aqui.');
    }

    const storage = JSON.stringify([...storadPlayers, newPlayer]);

    await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, storage);

  } catch (error) {
    throw (error);
  }
}