export type SessionType = {
  id: null;
  name: string;
  about: string;
  inPause: boolean;
  startDate: number;
  text: string;
};
export const endpointGetListSessions = () => {
  return fetch('http://localhost:4000/list').then(
    (res): Promise<SessionType[]> => {
      if (res.ok) {
        return res.json();
      }

      throw new Error('Loading trade session loading');
    },
  );
};
