export enum UpWebhookEventType {
  TRANSACTION_CREATED = 'TRANSACTION_CREATED',
  TRANSACTION_SETTLED = 'TRANSACTION_SETTLED',
  TRANSACTION_DELETED = 'TRANSACTION_DELETED',
  PING = 'PING'
}

export type UpRelationshipType = 'webhooks' | 'transactions';

export type UpRelationship = {
  data: {
    type: UpRelationshipType,
    id: string
  },
  links: {
    related: string
  }
}

export type UpWebhookEvent = {
  data: {
    type: 'webhook-events',
    id: string,
    attributes: {
      eventType: UpWebhookEventType,
      createdAt: string
    },
    relationships: {
      webhook: UpRelationship,
      transaction?: UpRelationship
    }
  }
}