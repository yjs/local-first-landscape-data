// @ts-check
import { LandscapeSchema } from '@localfirstfm/landscape-schema'

export const data = LandscapeSchema.make({
	Version: 1,
	Id: 'yjs',
	Name: 'Yjs',
	Description: 'Shared types to make anything collaborative',
	Website: 'https://yjs.dev',
  GitHub: 'https://github.com/yjs/yjs',
  GetStarted: 'https://learn.yjs.dev',
	Deployment: ['Self-hosted', 'Hosted', 'Third-party integrations'],
	License: 'MIT',
	AppTarget: {
		LanguageSDK: { data: ['TypeScript', 'JavaScript', 'Rust', 'C#', 'Swift', 'Python', 'Cffi', 'Kotlin'] },
    Platform: { data: ['Browser', 'Node', 'iOS', 'React Native', 'WASM'], comment: 'We have language bindings to many popular programming languages. See y-crdt.' },
    FrameworkIntegrations: {
      data: ['React', 'React Native', 'Vue', 'Svelte', 'Zustand'], 
      comment: 'There are several "bindings" that make Yjs work with different web frameworks. This list is probably not up to date.'
    },
    ClientBundleSize: {
      data: '~20kb', comment: 'About ~20kb gzipped. Your final bundle might be smaller as Yjs works well with dead-code elimination.'
    }
	},
	Networking: {
		Topology: { data: 'P2P / Client-server' },
    Protocol: {
      data: ['WebRTC', 'WebSockets', 'Matrix', 'Signal', 'via integrations', 'custom'],
      comment: 'It is relatively easy sync Yjs through custom communication protocols.' 
    }
	},
	ServerSideData: {
    PersistenceMechanism: {
      data: ['Redis', 'Leveldb', 'DB-integrations', 'custom'], 
      comment: 'It is relatively easy to persist Yjs data in your own database.' 
    },
		DataModelParadigm: { data: 'Document' },
    ExistingDatabaseSupport: { data: 'Via integrations and plugins' }
	},
  MaturityLevel: 'Mature',
  InitialReleaseDate: new Date('Tue Jan 27 2015 00:00:00 GMT+0100 (Central European Standard Time)'),
  NotableAdopters: [{ Name: 'Evernote', URL: 'https://evernote.com' }, { Name: 'Project Jupyter', URL: 'https://jupyter.org/' }, { Name: 'La Suite', URL: 'https://lasuite.numerique.gouv.fr/en' }, { Name: 'NextCloud', URL: 'https://nextcloud.com/' }],
  UniquenessNote: 'Minimal, flexible, fast, easy to integrate, unopinionated',
	ClientSideData: {
		QueryAPI: { data: ['Sync'] },
		PersistenceMechanism: { data: ['IndexedDB', 'DB-integrations', 'custom'] },
		PersistenceFeatures: { data: 'Transactions' },
		DataModel: { data: 'Document' },
		OfflineReads: { data: 'Full Support' },
		OfflineWrites: { data: 'Local conflict resolution' },
		DataSize: { data: 'Depends on the size of the shared data' },
    OptimisticUpdates: { data: 'Yes' },
    LocalRefreshLatency: { data: '<1ms', comment: 'The in-memory data structures fire events instantaneously, without waiting for a database.' }
	},
	SynchronizationStrategy: {
		FullOrPartialReplication: { data: ['Full Replication'] },
		ConflictHandling: { data: 'Automatic via CRDT' },
		WhereResolutionOccurs: { data: 'Client' },
    Latency: { data: '<1ms', comment: 'Depends on which provider you choose. But it\'s pretty fast.' },
		WhatGetsSynced: {
			data: {
				ClientToClient: 'CRDT operations, awareness state, content attribution.'
			},
		},
    Authority: { data: 'Decentralized' }
	},
  AuthIdentity: {
    Encryption: { data: 'Unopinionated, via providers', comment: 'E.g. via secsync or matrix-crdt' },
    AuthenticationMethod: { data: ['Unopinionated, via providers'] },
    AuthorizationPermissions: { data: 'Unopinionated, via providers' }
  },
  UIRelated: {
    RichTextEditing: { data: 'Yes', comment: 'We have integrations with most popular rich-text editors like ProseMirror, Lexical, and CodeMirror.' }
  },
  DevelopmentWorkflowsDX: {
    DebuggingTools: { data: ['DevTools', 'Data Inspector'] },
    TypeSupport: { data: 'Full Support' }
  }
})
