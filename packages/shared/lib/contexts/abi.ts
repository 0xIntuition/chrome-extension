export const abi = [
  {
    type: 'function',
    name: 'BURN_ADDRESS',
    inputs: [],
    outputs: [
      {
        name: '',
        type: 'address',
        internalType: 'address',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'CONTROLLER_ROLE',
    inputs: [],
    outputs: [
      {
        name: '',
        type: 'bytes32',
        internalType: 'bytes32',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'COUNTER_SALT',
    inputs: [],
    outputs: [
      {
        name: '',
        type: 'bytes32',
        internalType: 'bytes32',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'DEFAULT_ADMIN_ROLE',
    inputs: [],
    outputs: [
      {
        name: '',
        type: 'bytes32',
        internalType: 'bytes32',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'MAX_BATCH_SIZE',
    inputs: [],
    outputs: [
      {
        name: '',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'MIGRATOR_ROLE',
    inputs: [],
    outputs: [
      {
        name: '',
        type: 'bytes32',
        internalType: 'bytes32',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'ONE_SHARE',
    inputs: [],
    outputs: [
      {
        name: '',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: '_maxRedeem',
    inputs: [
      {
        name: 'sender',
        type: 'address',
        internalType: 'address',
      },
      {
        name: 'termId',
        type: 'bytes32',
        internalType: 'bytes32',
      },
      {
        name: 'curveId',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'accumulatedAtomWalletDepositFees',
    inputs: [
      {
        name: 'atomWallet',
        type: 'address',
        internalType: 'address',
      },
    ],
    outputs: [
      {
        name: 'accumulatedFees',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'accumulatedProtocolFees',
    inputs: [
      {
        name: 'epoch',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    outputs: [
      {
        name: 'accumulatedFees',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'approve',
    inputs: [
      {
        name: 'sender',
        type: 'address',
        internalType: 'address',
      },
      {
        name: 'approvalType',
        type: 'uint8',
        internalType: 'enum IMultiVault.ApprovalTypes',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'atom',
    inputs: [
      {
        name: 'atomId',
        type: 'bytes32',
        internalType: 'bytes32',
      },
    ],
    outputs: [
      {
        name: 'data',
        type: 'bytes',
        internalType: 'bytes',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'atomConfig',
    inputs: [],
    outputs: [
      {
        name: 'atomCreationProtocolFee',
        type: 'uint256',
        internalType: 'uint256',
      },
      {
        name: 'atomWalletDepositFee',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'atomDepositFractionAmount',
    inputs: [
      {
        name: 'assets',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'batchSetAtomData',
    inputs: [
      {
        name: 'creators',
        type: 'address[]',
        internalType: 'address[]',
      },
      {
        name: 'atomDataArray',
        type: 'bytes[]',
        internalType: 'bytes[]',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'batchSetTripleData',
    inputs: [
      {
        name: 'creators',
        type: 'address[]',
        internalType: 'address[]',
      },
      {
        name: 'tripleAtomIds',
        type: 'bytes32[3][]',
        internalType: 'bytes32[3][]',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'batchSetUserBalances',
    inputs: [
      {
        name: 'params',
        type: 'tuple',
        internalType: 'struct MultiVaultMigrationMode.BatchSetUserBalancesParams',
        components: [
          {
            name: 'termIds',
            type: 'bytes32[]',
            internalType: 'bytes32[]',
          },
          {
            name: 'bondingCurveId',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'user',
            type: 'address',
            internalType: 'address',
          },
          {
            name: 'userBalances',
            type: 'uint256[]',
            internalType: 'uint256[]',
          },
        ],
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'batchSetVaultTotals',
    inputs: [
      {
        name: 'termIds',
        type: 'bytes32[]',
        internalType: 'bytes32[]',
      },
      {
        name: 'bondingCurveId',
        type: 'uint256',
        internalType: 'uint256',
      },
      {
        name: 'vaultTotals',
        type: 'tuple[]',
        internalType: 'struct MultiVaultMigrationMode.VaultTotals[]',
        components: [
          {
            name: 'totalAssets',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'totalShares',
            type: 'uint256',
            internalType: 'uint256',
          },
        ],
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'bondingCurveConfig',
    inputs: [],
    outputs: [
      {
        name: 'registry',
        type: 'address',
        internalType: 'address',
      },
      {
        name: 'defaultCurveId',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'calculateAtomId',
    inputs: [
      {
        name: 'data',
        type: 'bytes',
        internalType: 'bytes',
      },
    ],
    outputs: [
      {
        name: 'id',
        type: 'bytes32',
        internalType: 'bytes32',
      },
    ],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    name: 'calculateCounterTripleId',
    inputs: [
      {
        name: 'subjectId',
        type: 'bytes32',
        internalType: 'bytes32',
      },
      {
        name: 'predicateId',
        type: 'bytes32',
        internalType: 'bytes32',
      },
      {
        name: 'objectId',
        type: 'bytes32',
        internalType: 'bytes32',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'bytes32',
        internalType: 'bytes32',
      },
    ],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    name: 'calculateTripleId',
    inputs: [
      {
        name: 'subjectId',
        type: 'bytes32',
        internalType: 'bytes32',
      },
      {
        name: 'predicateId',
        type: 'bytes32',
        internalType: 'bytes32',
      },
      {
        name: 'objectId',
        type: 'bytes32',
        internalType: 'bytes32',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'bytes32',
        internalType: 'bytes32',
      },
    ],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    name: 'claimAtomWalletDepositFees',
    inputs: [
      {
        name: 'termId',
        type: 'bytes32',
        internalType: 'bytes32',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'computeAtomWalletAddr',
    inputs: [
      {
        name: 'atomId',
        type: 'bytes32',
        internalType: 'bytes32',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'address',
        internalType: 'address',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'convertToAssets',
    inputs: [
      {
        name: 'termId',
        type: 'bytes32',
        internalType: 'bytes32',
      },
      {
        name: 'bondingCurveId',
        type: 'uint256',
        internalType: 'uint256',
      },
      {
        name: 'shares',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'convertToShares',
    inputs: [
      {
        name: 'termId',
        type: 'bytes32',
        internalType: 'bytes32',
      },
      {
        name: 'curveId',
        type: 'uint256',
        internalType: 'uint256',
      },
      {
        name: 'assets',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'createAtoms',
    inputs: [
      {
        name: 'data',
        type: 'bytes[]',
        internalType: 'bytes[]',
      },
      {
        name: 'assets',
        type: 'uint256[]',
        internalType: 'uint256[]',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'bytes32[]',
        internalType: 'bytes32[]',
      },
    ],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    name: 'createTriples',
    inputs: [
      {
        name: 'subjectIds',
        type: 'bytes32[]',
        internalType: 'bytes32[]',
      },
      {
        name: 'predicateIds',
        type: 'bytes32[]',
        internalType: 'bytes32[]',
      },
      {
        name: 'objectIds',
        type: 'bytes32[]',
        internalType: 'bytes32[]',
      },
      {
        name: 'assets',
        type: 'uint256[]',
        internalType: 'uint256[]',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'bytes32[]',
        internalType: 'bytes32[]',
      },
    ],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    name: 'currentEpoch',
    inputs: [],
    outputs: [
      {
        name: '',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'currentSharePrice',
    inputs: [
      {
        name: 'termId',
        type: 'bytes32',
        internalType: 'bytes32',
      },
      {
        name: 'curveId',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'deposit',
    inputs: [
      {
        name: 'receiver',
        type: 'address',
        internalType: 'address',
      },
      {
        name: 'termId',
        type: 'bytes32',
        internalType: 'bytes32',
      },
      {
        name: 'curveId',
        type: 'uint256',
        internalType: 'uint256',
      },
      {
        name: 'minShares',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    name: 'depositBatch',
    inputs: [
      {
        name: 'receiver',
        type: 'address',
        internalType: 'address',
      },
      {
        name: 'termIds',
        type: 'bytes32[]',
        internalType: 'bytes32[]',
      },
      {
        name: 'curveIds',
        type: 'uint256[]',
        internalType: 'uint256[]',
      },
      {
        name: 'assets',
        type: 'uint256[]',
        internalType: 'uint256[]',
      },
      {
        name: 'minShares',
        type: 'uint256[]',
        internalType: 'uint256[]',
      },
    ],
    outputs: [
      {
        name: 'shares',
        type: 'uint256[]',
        internalType: 'uint256[]',
      },
    ],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    name: 'entryFeeAmount',
    inputs: [
      {
        name: 'assets',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'exitFeeAmount',
    inputs: [
      {
        name: 'assets',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'generalConfig',
    inputs: [],
    outputs: [
      {
        name: 'admin',
        type: 'address',
        internalType: 'address',
      },
      {
        name: 'protocolMultisig',
        type: 'address',
        internalType: 'address',
      },
      {
        name: 'feeDenominator',
        type: 'uint256',
        internalType: 'uint256',
      },
      {
        name: 'trustBonding',
        type: 'address',
        internalType: 'address',
      },
      {
        name: 'minDeposit',
        type: 'uint256',
        internalType: 'uint256',
      },
      {
        name: 'minShare',
        type: 'uint256',
        internalType: 'uint256',
      },
      {
        name: 'atomDataMaxLength',
        type: 'uint256',
        internalType: 'uint256',
      },
      {
        name: 'decimalPrecision',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'getAtom',
    inputs: [
      {
        name: 'atomId',
        type: 'bytes32',
        internalType: 'bytes32',
      },
    ],
    outputs: [
      {
        name: 'data',
        type: 'bytes',
        internalType: 'bytes',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'getAtomConfig',
    inputs: [],
    outputs: [
      {
        name: '',
        type: 'tuple',
        internalType: 'struct AtomConfig',
        components: [
          {
            name: 'atomCreationProtocolFee',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'atomWalletDepositFee',
            type: 'uint256',
            internalType: 'uint256',
          },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'getAtomCost',
    inputs: [],
    outputs: [
      {
        name: '',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'getAtomCreationCost',
    inputs: [],
    outputs: [
      {
        name: '',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'getAtomWarden',
    inputs: [],
    outputs: [
      {
        name: '',
        type: 'address',
        internalType: 'address',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'getBondingCurveConfig',
    inputs: [],
    outputs: [
      {
        name: '',
        type: 'tuple',
        internalType: 'struct BondingCurveConfig',
        components: [
          {
            name: 'registry',
            type: 'address',
            internalType: 'address',
          },
          {
            name: 'defaultCurveId',
            type: 'uint256',
            internalType: 'uint256',
          },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'getCounterIdFromTripleId',
    inputs: [
      {
        name: 'tripleId',
        type: 'bytes32',
        internalType: 'bytes32',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'bytes32',
        internalType: 'bytes32',
      },
    ],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    name: 'getDefaultCurveId',
    inputs: [],
    outputs: [
      {
        name: '',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'getGeneralConfig',
    inputs: [],
    outputs: [
      {
        name: '',
        type: 'tuple',
        internalType: 'struct GeneralConfig',
        components: [
          {
            name: 'admin',
            type: 'address',
            internalType: 'address',
          },
          {
            name: 'protocolMultisig',
            type: 'address',
            internalType: 'address',
          },
          {
            name: 'feeDenominator',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'trustBonding',
            type: 'address',
            internalType: 'address',
          },
          {
            name: 'minDeposit',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'minShare',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'atomDataMaxLength',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'decimalPrecision',
            type: 'uint256',
            internalType: 'uint256',
          },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'getRoleAdmin',
    inputs: [
      {
        name: 'role',
        type: 'bytes32',
        internalType: 'bytes32',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'bytes32',
        internalType: 'bytes32',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'getShares',
    inputs: [
      {
        name: 'account',
        type: 'address',
        internalType: 'address',
      },
      {
        name: 'termId',
        type: 'bytes32',
        internalType: 'bytes32',
      },
      {
        name: 'curveId',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'getTotalUtilizationForEpoch',
    inputs: [
      {
        name: 'epoch',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'int256',
        internalType: 'int256',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'getTriple',
    inputs: [
      {
        name: 'tripleId',
        type: 'bytes32',
        internalType: 'bytes32',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'bytes32',
        internalType: 'bytes32',
      },
      {
        name: '',
        type: 'bytes32',
        internalType: 'bytes32',
      },
      {
        name: '',
        type: 'bytes32',
        internalType: 'bytes32',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'getTripleConfig',
    inputs: [],
    outputs: [
      {
        name: '',
        type: 'tuple',
        internalType: 'struct TripleConfig',
        components: [
          {
            name: 'tripleCreationProtocolFee',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'totalAtomDepositsOnTripleCreation',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'atomDepositFractionForTriple',
            type: 'uint256',
            internalType: 'uint256',
          },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'getTripleCost',
    inputs: [],
    outputs: [
      {
        name: '',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'getTripleIdFromCounterId',
    inputs: [
      {
        name: 'counterId',
        type: 'bytes32',
        internalType: 'bytes32',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'bytes32',
        internalType: 'bytes32',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'getUserUtilizationForEpoch',
    inputs: [
      {
        name: 'user',
        type: 'address',
        internalType: 'address',
      },
      {
        name: 'epoch',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'int256',
        internalType: 'int256',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'getVault',
    inputs: [
      {
        name: 'termId',
        type: 'bytes32',
        internalType: 'bytes32',
      },
      {
        name: 'curveId',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'uint256',
        internalType: 'uint256',
      },
      {
        name: '',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'getVaultFees',
    inputs: [],
    outputs: [
      {
        name: '',
        type: 'tuple',
        internalType: 'struct VaultFees',
        components: [
          {
            name: 'entryFee',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'exitFee',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'protocolFee',
            type: 'uint256',
            internalType: 'uint256',
          },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'getVaultType',
    inputs: [
      {
        name: 'termId',
        type: 'bytes32',
        internalType: 'bytes32',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'uint8',
        internalType: 'enum IMultiVault.VaultType',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'getWalletConfig',
    inputs: [],
    outputs: [
      {
        name: '',
        type: 'tuple',
        internalType: 'struct WalletConfig',
        components: [
          {
            name: 'permit2',
            type: 'address',
            internalType: 'contract IPermit2',
          },
          {
            name: 'entryPoint',
            type: 'address',
            internalType: 'address',
          },
          {
            name: 'atomWarden',
            type: 'address',
            internalType: 'address',
          },
          {
            name: 'atomWalletBeacon',
            type: 'address',
            internalType: 'address',
          },
          {
            name: 'atomWalletFactory',
            type: 'address',
            internalType: 'address',
          },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'grantRole',
    inputs: [
      {
        name: 'role',
        type: 'bytes32',
        internalType: 'bytes32',
      },
      {
        name: 'account',
        type: 'address',
        internalType: 'address',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'hasRole',
    inputs: [
      {
        name: 'role',
        type: 'bytes32',
        internalType: 'bytes32',
      },
      {
        name: 'account',
        type: 'address',
        internalType: 'address',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'bool',
        internalType: 'bool',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'initialize',
    inputs: [
      {
        name: '_generalConfig',
        type: 'tuple',
        internalType: 'struct GeneralConfig',
        components: [
          {
            name: 'admin',
            type: 'address',
            internalType: 'address',
          },
          {
            name: 'protocolMultisig',
            type: 'address',
            internalType: 'address',
          },
          {
            name: 'feeDenominator',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'trustBonding',
            type: 'address',
            internalType: 'address',
          },
          {
            name: 'minDeposit',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'minShare',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'atomDataMaxLength',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'decimalPrecision',
            type: 'uint256',
            internalType: 'uint256',
          },
        ],
      },
      {
        name: '_atomConfig',
        type: 'tuple',
        internalType: 'struct AtomConfig',
        components: [
          {
            name: 'atomCreationProtocolFee',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'atomWalletDepositFee',
            type: 'uint256',
            internalType: 'uint256',
          },
        ],
      },
      {
        name: '_tripleConfig',
        type: 'tuple',
        internalType: 'struct TripleConfig',
        components: [
          {
            name: 'tripleCreationProtocolFee',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'totalAtomDepositsOnTripleCreation',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'atomDepositFractionForTriple',
            type: 'uint256',
            internalType: 'uint256',
          },
        ],
      },
      {
        name: '_walletConfig',
        type: 'tuple',
        internalType: 'struct WalletConfig',
        components: [
          {
            name: 'permit2',
            type: 'address',
            internalType: 'contract IPermit2',
          },
          {
            name: 'entryPoint',
            type: 'address',
            internalType: 'address',
          },
          {
            name: 'atomWarden',
            type: 'address',
            internalType: 'address',
          },
          {
            name: 'atomWalletBeacon',
            type: 'address',
            internalType: 'address',
          },
          {
            name: 'atomWalletFactory',
            type: 'address',
            internalType: 'address',
          },
        ],
      },
      {
        name: '_vaultFees',
        type: 'tuple',
        internalType: 'struct VaultFees',
        components: [
          {
            name: 'entryFee',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'exitFee',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'protocolFee',
            type: 'uint256',
            internalType: 'uint256',
          },
        ],
      },
      {
        name: '_bondingCurveConfig',
        type: 'tuple',
        internalType: 'struct BondingCurveConfig',
        components: [
          {
            name: 'registry',
            type: 'address',
            internalType: 'address',
          },
          {
            name: 'defaultCurveId',
            type: 'uint256',
            internalType: 'uint256',
          },
        ],
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'isAtom',
    inputs: [
      {
        name: 'atomId',
        type: 'bytes32',
        internalType: 'bytes32',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'bool',
        internalType: 'bool',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'isCounterTriple',
    inputs: [
      {
        name: 'termId',
        type: 'bytes32',
        internalType: 'bytes32',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'bool',
        internalType: 'bool',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'isTermCreated',
    inputs: [
      {
        name: 'id',
        type: 'bytes32',
        internalType: 'bytes32',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'bool',
        internalType: 'bool',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'isTriple',
    inputs: [
      {
        name: 'termId',
        type: 'bytes32',
        internalType: 'bytes32',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'bool',
        internalType: 'bool',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'lastActiveEpoch',
    inputs: [
      {
        name: 'user',
        type: 'address',
        internalType: 'address',
      },
    ],
    outputs: [
      {
        name: 'epoch',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'pause',
    inputs: [],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'paused',
    inputs: [],
    outputs: [
      {
        name: '',
        type: 'bool',
        internalType: 'bool',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'personalUtilization',
    inputs: [
      {
        name: 'user',
        type: 'address',
        internalType: 'address',
      },
      {
        name: 'epoch',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    outputs: [
      {
        name: 'utilizationAmount',
        type: 'int256',
        internalType: 'int256',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'previewAtomCreate',
    inputs: [
      {
        name: 'termId',
        type: 'bytes32',
        internalType: 'bytes32',
      },
      {
        name: 'curveId',
        type: 'uint256',
        internalType: 'uint256',
      },
      {
        name: 'assets',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    outputs: [
      {
        name: 'shares',
        type: 'uint256',
        internalType: 'uint256',
      },
      {
        name: 'assetsAfterFixedFees',
        type: 'uint256',
        internalType: 'uint256',
      },
      {
        name: 'assetsAfterFees',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'previewDeposit',
    inputs: [
      {
        name: 'termId',
        type: 'bytes32',
        internalType: 'bytes32',
      },
      {
        name: 'curveId',
        type: 'uint256',
        internalType: 'uint256',
      },
      {
        name: 'assets',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    outputs: [
      {
        name: 'shares',
        type: 'uint256',
        internalType: 'uint256',
      },
      {
        name: 'assetsAfterFees',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'previewRedeem',
    inputs: [
      {
        name: 'termId',
        type: 'bytes32',
        internalType: 'bytes32',
      },
      {
        name: 'curveId',
        type: 'uint256',
        internalType: 'uint256',
      },
      {
        name: 'assets',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    outputs: [
      {
        name: 'shares',
        type: 'uint256',
        internalType: 'uint256',
      },
      {
        name: 'assetsAfterFees',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'previewTripleCreate',
    inputs: [
      {
        name: 'termId',
        type: 'bytes32',
        internalType: 'bytes32',
      },
      {
        name: 'curveId',
        type: 'uint256',
        internalType: 'uint256',
      },
      {
        name: 'assets',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    outputs: [
      {
        name: 'shares',
        type: 'uint256',
        internalType: 'uint256',
      },
      {
        name: 'assetsAfterFixedFees',
        type: 'uint256',
        internalType: 'uint256',
      },
      {
        name: 'assetsAfterFees',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'protocolFeeAmount',
    inputs: [
      {
        name: 'assets',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'redeem',
    inputs: [
      {
        name: 'receiver',
        type: 'address',
        internalType: 'address',
      },
      {
        name: 'termId',
        type: 'bytes32',
        internalType: 'bytes32',
      },
      {
        name: 'curveId',
        type: 'uint256',
        internalType: 'uint256',
      },
      {
        name: 'shares',
        type: 'uint256',
        internalType: 'uint256',
      },
      {
        name: 'minAssets',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'redeemBatch',
    inputs: [
      {
        name: 'receiver',
        type: 'address',
        internalType: 'address',
      },
      {
        name: 'termIds',
        type: 'bytes32[]',
        internalType: 'bytes32[]',
      },
      {
        name: 'curveIds',
        type: 'uint256[]',
        internalType: 'uint256[]',
      },
      {
        name: 'shares',
        type: 'uint256[]',
        internalType: 'uint256[]',
      },
      {
        name: 'minAssets',
        type: 'uint256[]',
        internalType: 'uint256[]',
      },
    ],
    outputs: [
      {
        name: 'received',
        type: 'uint256[]',
        internalType: 'uint256[]',
      },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'renounceRole',
    inputs: [
      {
        name: 'role',
        type: 'bytes32',
        internalType: 'bytes32',
      },
      {
        name: 'callerConfirmation',
        type: 'address',
        internalType: 'address',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'revokeRole',
    inputs: [
      {
        name: 'role',
        type: 'bytes32',
        internalType: 'bytes32',
      },
      {
        name: 'account',
        type: 'address',
        internalType: 'address',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'setAtomConfig',
    inputs: [
      {
        name: '_atomConfig',
        type: 'tuple',
        internalType: 'struct AtomConfig',
        components: [
          {
            name: 'atomCreationProtocolFee',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'atomWalletDepositFee',
            type: 'uint256',
            internalType: 'uint256',
          },
        ],
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'setBondingCurveConfig',
    inputs: [
      {
        name: '_bondingCurveConfig',
        type: 'tuple',
        internalType: 'struct BondingCurveConfig',
        components: [
          {
            name: 'registry',
            type: 'address',
            internalType: 'address',
          },
          {
            name: 'defaultCurveId',
            type: 'uint256',
            internalType: 'uint256',
          },
        ],
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'setGeneralConfig',
    inputs: [
      {
        name: '_generalConfig',
        type: 'tuple',
        internalType: 'struct GeneralConfig',
        components: [
          {
            name: 'admin',
            type: 'address',
            internalType: 'address',
          },
          {
            name: 'protocolMultisig',
            type: 'address',
            internalType: 'address',
          },
          {
            name: 'feeDenominator',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'trustBonding',
            type: 'address',
            internalType: 'address',
          },
          {
            name: 'minDeposit',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'minShare',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'atomDataMaxLength',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'decimalPrecision',
            type: 'uint256',
            internalType: 'uint256',
          },
        ],
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'setTermCount',
    inputs: [
      {
        name: '_termCount',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'setTripleConfig',
    inputs: [
      {
        name: '_tripleConfig',
        type: 'tuple',
        internalType: 'struct TripleConfig',
        components: [
          {
            name: 'tripleCreationProtocolFee',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'totalAtomDepositsOnTripleCreation',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'atomDepositFractionForTriple',
            type: 'uint256',
            internalType: 'uint256',
          },
        ],
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'setVaultFees',
    inputs: [
      {
        name: '_vaultFees',
        type: 'tuple',
        internalType: 'struct VaultFees',
        components: [
          {
            name: 'entryFee',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'exitFee',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'protocolFee',
            type: 'uint256',
            internalType: 'uint256',
          },
        ],
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'setWalletConfig',
    inputs: [
      {
        name: '_walletConfig',
        type: 'tuple',
        internalType: 'struct WalletConfig',
        components: [
          {
            name: 'permit2',
            type: 'address',
            internalType: 'contract IPermit2',
          },
          {
            name: 'entryPoint',
            type: 'address',
            internalType: 'address',
          },
          {
            name: 'atomWarden',
            type: 'address',
            internalType: 'address',
          },
          {
            name: 'atomWalletBeacon',
            type: 'address',
            internalType: 'address',
          },
          {
            name: 'atomWalletFactory',
            type: 'address',
            internalType: 'address',
          },
        ],
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'supportsInterface',
    inputs: [
      {
        name: 'interfaceId',
        type: 'bytes4',
        internalType: 'bytes4',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'bool',
        internalType: 'bool',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'totalTermsCreated',
    inputs: [],
    outputs: [
      {
        name: '',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'totalUtilization',
    inputs: [
      {
        name: 'epoch',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    outputs: [
      {
        name: 'utilizationAmount',
        type: 'int256',
        internalType: 'int256',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'triple',
    inputs: [
      {
        name: 'tripleId',
        type: 'bytes32',
        internalType: 'bytes32',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'bytes32',
        internalType: 'bytes32',
      },
      {
        name: '',
        type: 'bytes32',
        internalType: 'bytes32',
      },
      {
        name: '',
        type: 'bytes32',
        internalType: 'bytes32',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'tripleConfig',
    inputs: [],
    outputs: [
      {
        name: 'tripleCreationProtocolFee',
        type: 'uint256',
        internalType: 'uint256',
      },
      {
        name: 'totalAtomDepositsOnTripleCreation',
        type: 'uint256',
        internalType: 'uint256',
      },
      {
        name: 'atomDepositFractionForTriple',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'unpause',
    inputs: [],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'vaultFees',
    inputs: [],
    outputs: [
      {
        name: 'entryFee',
        type: 'uint256',
        internalType: 'uint256',
      },
      {
        name: 'exitFee',
        type: 'uint256',
        internalType: 'uint256',
      },
      {
        name: 'protocolFee',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'walletConfig',
    inputs: [],
    outputs: [
      {
        name: 'permit2',
        type: 'address',
        internalType: 'contract IPermit2',
      },
      {
        name: 'entryPoint',
        type: 'address',
        internalType: 'address',
      },
      {
        name: 'atomWarden',
        type: 'address',
        internalType: 'address',
      },
      {
        name: 'atomWalletBeacon',
        type: 'address',
        internalType: 'address',
      },
      {
        name: 'atomWalletFactory',
        type: 'address',
        internalType: 'address',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'event',
    name: 'ApprovalTypeUpdated',
    inputs: [
      {
        name: 'sender',
        type: 'address',
        indexed: true,
        internalType: 'address',
      },
      {
        name: 'receiver',
        type: 'address',
        indexed: true,
        internalType: 'address',
      },
      {
        name: 'approvalType',
        type: 'uint8',
        indexed: false,
        internalType: 'enum IMultiVault.ApprovalTypes',
      },
    ],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'AtomCreated',
    inputs: [
      {
        name: 'creator',
        type: 'address',
        indexed: true,
        internalType: 'address',
      },
      {
        name: 'termId',
        type: 'bytes32',
        indexed: true,
        internalType: 'bytes32',
      },
      {
        name: 'atomData',
        type: 'bytes',
        indexed: false,
        internalType: 'bytes',
      },
      {
        name: 'atomWallet',
        type: 'address',
        indexed: false,
        internalType: 'address',
      },
    ],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'AtomDepositFractionDeposited',
    inputs: [
      {
        name: 'termId',
        type: 'bytes32',
        indexed: true,
        internalType: 'bytes32',
      },
      {
        name: 'sender',
        type: 'address',
        indexed: true,
        internalType: 'address',
      },
      {
        name: 'amount',
        type: 'uint256',
        indexed: false,
        internalType: 'uint256',
      },
    ],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'AtomWalletDepositFeeCollected',
    inputs: [
      {
        name: 'termId',
        type: 'bytes32',
        indexed: true,
        internalType: 'bytes32',
      },
      {
        name: 'sender',
        type: 'address',
        indexed: true,
        internalType: 'address',
      },
      {
        name: 'amount',
        type: 'uint256',
        indexed: false,
        internalType: 'uint256',
      },
    ],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'AtomWalletDepositFeesClaimed',
    inputs: [
      {
        name: 'termId',
        type: 'bytes32',
        indexed: true,
        internalType: 'bytes32',
      },
      {
        name: 'atomWalletOwner',
        type: 'address',
        indexed: true,
        internalType: 'address',
      },
      {
        name: 'feesClaimed',
        type: 'uint256',
        indexed: true,
        internalType: 'uint256',
      },
    ],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'ConfigSynced',
    inputs: [
      {
        name: 'caller',
        type: 'address',
        indexed: true,
        internalType: 'address',
      },
    ],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'Deposited',
    inputs: [
      {
        name: 'sender',
        type: 'address',
        indexed: true,
        internalType: 'address',
      },
      {
        name: 'receiver',
        type: 'address',
        indexed: true,
        internalType: 'address',
      },
      {
        name: 'termId',
        type: 'bytes32',
        indexed: true,
        internalType: 'bytes32',
      },
      {
        name: 'curveId',
        type: 'uint256',
        indexed: false,
        internalType: 'uint256',
      },
      {
        name: 'assets',
        type: 'uint256',
        indexed: false,
        internalType: 'uint256',
      },
      {
        name: 'assetsAfterFees',
        type: 'uint256',
        indexed: false,
        internalType: 'uint256',
      },
      {
        name: 'shares',
        type: 'uint256',
        indexed: false,
        internalType: 'uint256',
      },
      {
        name: 'totalShares',
        type: 'uint256',
        indexed: false,
        internalType: 'uint256',
      },
      {
        name: 'vaultType',
        type: 'uint8',
        indexed: false,
        internalType: 'enum IMultiVault.VaultType',
      },
    ],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'EntryFeeCollected',
    inputs: [
      {
        name: 'termId',
        type: 'bytes32',
        indexed: true,
        internalType: 'bytes32',
      },
      {
        name: 'curveId',
        type: 'uint256',
        indexed: true,
        internalType: 'uint256',
      },
      {
        name: 'sender',
        type: 'address',
        indexed: true,
        internalType: 'address',
      },
      {
        name: 'amount',
        type: 'uint256',
        indexed: false,
        internalType: 'uint256',
      },
    ],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'ExitFeeCollected',
    inputs: [
      {
        name: 'termId',
        type: 'bytes32',
        indexed: true,
        internalType: 'bytes32',
      },
      {
        name: 'curveId',
        type: 'uint256',
        indexed: true,
        internalType: 'uint256',
      },
      {
        name: 'sender',
        type: 'address',
        indexed: true,
        internalType: 'address',
      },
      {
        name: 'amount',
        type: 'uint256',
        indexed: false,
        internalType: 'uint256',
      },
    ],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'Initialized',
    inputs: [
      {
        name: 'version',
        type: 'uint64',
        indexed: false,
        internalType: 'uint64',
      },
    ],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'Paused',
    inputs: [
      {
        name: 'account',
        type: 'address',
        indexed: false,
        internalType: 'address',
      },
    ],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'PersonalUtilizationAdded',
    inputs: [
      {
        name: 'user',
        type: 'address',
        indexed: true,
        internalType: 'address',
      },
      {
        name: 'epoch',
        type: 'uint256',
        indexed: true,
        internalType: 'uint256',
      },
      {
        name: 'valueAdded',
        type: 'int256',
        indexed: true,
        internalType: 'int256',
      },
      {
        name: 'personalUtilization',
        type: 'int256',
        indexed: false,
        internalType: 'int256',
      },
    ],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'PersonalUtilizationRemoved',
    inputs: [
      {
        name: 'user',
        type: 'address',
        indexed: true,
        internalType: 'address',
      },
      {
        name: 'epoch',
        type: 'uint256',
        indexed: true,
        internalType: 'uint256',
      },
      {
        name: 'valueRemoved',
        type: 'int256',
        indexed: true,
        internalType: 'int256',
      },
      {
        name: 'personalUtilization',
        type: 'int256',
        indexed: false,
        internalType: 'int256',
      },
    ],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'ProtocolFeeAccrued',
    inputs: [
      {
        name: 'epoch',
        type: 'uint256',
        indexed: true,
        internalType: 'uint256',
      },
      {
        name: 'amount',
        type: 'uint256',
        indexed: false,
        internalType: 'uint256',
      },
    ],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'ProtocolFeeTransferred',
    inputs: [
      {
        name: 'epoch',
        type: 'uint256',
        indexed: true,
        internalType: 'uint256',
      },
      {
        name: 'destination',
        type: 'address',
        indexed: true,
        internalType: 'address',
      },
      {
        name: 'amount',
        type: 'uint256',
        indexed: false,
        internalType: 'uint256',
      },
    ],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'Redeemed',
    inputs: [
      {
        name: 'sender',
        type: 'address',
        indexed: true,
        internalType: 'address',
      },
      {
        name: 'receiver',
        type: 'address',
        indexed: true,
        internalType: 'address',
      },
      {
        name: 'termId',
        type: 'bytes32',
        indexed: true,
        internalType: 'bytes32',
      },
      {
        name: 'curveId',
        type: 'uint256',
        indexed: false,
        internalType: 'uint256',
      },
      {
        name: 'shares',
        type: 'uint256',
        indexed: false,
        internalType: 'uint256',
      },
      {
        name: 'totalShares',
        type: 'uint256',
        indexed: false,
        internalType: 'uint256',
      },
      {
        name: 'assets',
        type: 'uint256',
        indexed: false,
        internalType: 'uint256',
      },
      {
        name: 'fees',
        type: 'uint256',
        indexed: false,
        internalType: 'uint256',
      },
      {
        name: 'vaultType',
        type: 'uint8',
        indexed: false,
        internalType: 'enum IMultiVault.VaultType',
      },
    ],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'RoleAdminChanged',
    inputs: [
      {
        name: 'role',
        type: 'bytes32',
        indexed: true,
        internalType: 'bytes32',
      },
      {
        name: 'previousAdminRole',
        type: 'bytes32',
        indexed: true,
        internalType: 'bytes32',
      },
      {
        name: 'newAdminRole',
        type: 'bytes32',
        indexed: true,
        internalType: 'bytes32',
      },
    ],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'RoleGranted',
    inputs: [
      {
        name: 'role',
        type: 'bytes32',
        indexed: true,
        internalType: 'bytes32',
      },
      {
        name: 'account',
        type: 'address',
        indexed: true,
        internalType: 'address',
      },
      {
        name: 'sender',
        type: 'address',
        indexed: true,
        internalType: 'address',
      },
    ],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'RoleRevoked',
    inputs: [
      {
        name: 'role',
        type: 'bytes32',
        indexed: true,
        internalType: 'bytes32',
      },
      {
        name: 'account',
        type: 'address',
        indexed: true,
        internalType: 'address',
      },
      {
        name: 'sender',
        type: 'address',
        indexed: true,
        internalType: 'address',
      },
    ],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'SharePriceChanged',
    inputs: [
      {
        name: 'termId',
        type: 'bytes32',
        indexed: true,
        internalType: 'bytes32',
      },
      {
        name: 'curveId',
        type: 'uint256',
        indexed: true,
        internalType: 'uint256',
      },
      {
        name: 'sharePrice',
        type: 'uint256',
        indexed: false,
        internalType: 'uint256',
      },
      {
        name: 'totalAssets',
        type: 'uint256',
        indexed: false,
        internalType: 'uint256',
      },
      {
        name: 'totalShares',
        type: 'uint256',
        indexed: false,
        internalType: 'uint256',
      },
      {
        name: 'vaultType',
        type: 'uint8',
        indexed: false,
        internalType: 'enum IMultiVault.VaultType',
      },
    ],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'SharesPullApproval',
    inputs: [
      {
        name: 'accountFrom',
        type: 'address',
        indexed: true,
        internalType: 'address',
      },
      {
        name: 'accountTo',
        type: 'address',
        indexed: true,
        internalType: 'address',
      },
      {
        name: 'status',
        type: 'bool',
        indexed: false,
        internalType: 'bool',
      },
    ],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'TermCountSet',
    inputs: [
      {
        name: 'termCount',
        type: 'uint256',
        indexed: false,
        internalType: 'uint256',
      },
    ],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'TokensRecovered',
    inputs: [
      {
        name: 'token',
        type: 'address',
        indexed: true,
        internalType: 'address',
      },
      {
        name: 'recipient',
        type: 'address',
        indexed: true,
        internalType: 'address',
      },
      {
        name: 'amount',
        type: 'uint256',
        indexed: true,
        internalType: 'uint256',
      },
    ],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'TotalUtilizationAdded',
    inputs: [
      {
        name: 'epoch',
        type: 'uint256',
        indexed: true,
        internalType: 'uint256',
      },
      {
        name: 'valueAdded',
        type: 'int256',
        indexed: true,
        internalType: 'int256',
      },
      {
        name: 'totalUtilization',
        type: 'int256',
        indexed: true,
        internalType: 'int256',
      },
    ],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'TotalUtilizationRemoved',
    inputs: [
      {
        name: 'epoch',
        type: 'uint256',
        indexed: true,
        internalType: 'uint256',
      },
      {
        name: 'valueRemoved',
        type: 'int256',
        indexed: true,
        internalType: 'int256',
      },
      {
        name: 'totalUtilization',
        type: 'int256',
        indexed: true,
        internalType: 'int256',
      },
    ],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'TripleCreated',
    inputs: [
      {
        name: 'creator',
        type: 'address',
        indexed: true,
        internalType: 'address',
      },
      {
        name: 'termId',
        type: 'bytes32',
        indexed: true,
        internalType: 'bytes32',
      },
      {
        name: 'subjectId',
        type: 'bytes32',
        indexed: false,
        internalType: 'bytes32',
      },
      {
        name: 'predicateId',
        type: 'bytes32',
        indexed: false,
        internalType: 'bytes32',
      },
      {
        name: 'objectId',
        type: 'bytes32',
        indexed: false,
        internalType: 'bytes32',
      },
    ],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'Unpaused',
    inputs: [
      {
        name: 'account',
        type: 'address',
        indexed: false,
        internalType: 'address',
      },
    ],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'WalletMigrated',
    inputs: [
      {
        name: 'termId',
        type: 'bytes32',
        indexed: true,
        internalType: 'bytes32',
      },
      {
        name: 'curveId',
        type: 'uint256',
        indexed: true,
        internalType: 'uint256',
      },
      {
        name: 'oldWallet',
        type: 'address',
        indexed: true,
        internalType: 'address',
      },
      {
        name: 'newWallet',
        type: 'address',
        indexed: false,
        internalType: 'address',
      },
      {
        name: 'sharesMigrated',
        type: 'uint256',
        indexed: false,
        internalType: 'uint256',
      },
    ],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'WrappedERC20Registered',
    inputs: [
      {
        name: 'termId',
        type: 'bytes32',
        indexed: true,
        internalType: 'bytes32',
      },
      {
        name: 'curveId',
        type: 'uint256',
        indexed: true,
        internalType: 'uint256',
      },
      {
        name: 'wrappedERC20',
        type: 'address',
        indexed: true,
        internalType: 'address',
      },
    ],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'WrapperTransfer',
    inputs: [
      {
        name: 'from',
        type: 'address',
        indexed: true,
        internalType: 'address',
      },
      {
        name: 'to',
        type: 'address',
        indexed: true,
        internalType: 'address',
      },
      {
        name: 'termId',
        type: 'bytes32',
        indexed: true,
        internalType: 'bytes32',
      },
      {
        name: 'curveId',
        type: 'uint256',
        indexed: false,
        internalType: 'uint256',
      },
      {
        name: 'shares',
        type: 'uint256',
        indexed: false,
        internalType: 'uint256',
      },
    ],
    anonymous: false,
  },
  {
    type: 'error',
    name: 'AccessControlBadConfirmation',
    inputs: [],
  },
  {
    type: 'error',
    name: 'AccessControlUnauthorizedAccount',
    inputs: [
      {
        name: 'account',
        type: 'address',
        internalType: 'address',
      },
      {
        name: 'neededRole',
        type: 'bytes32',
        internalType: 'bytes32',
      },
    ],
  },
  {
    type: 'error',
    name: 'AtomDoesNotExist',
    inputs: [
      {
        name: 'termId',
        type: 'bytes32',
        internalType: 'bytes32',
      },
    ],
  },
  {
    type: 'error',
    name: 'EnforcedPause',
    inputs: [],
  },
  {
    type: 'error',
    name: 'ExpectedPause',
    inputs: [],
  },
  {
    type: 'error',
    name: 'FailedCall',
    inputs: [],
  },
  {
    type: 'error',
    name: 'InsufficientBalance',
    inputs: [
      {
        name: 'balance',
        type: 'uint256',
        internalType: 'uint256',
      },
      {
        name: 'needed',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
  },
  {
    type: 'error',
    name: 'InvalidInitialization',
    inputs: [],
  },
  {
    type: 'error',
    name: 'MultiVault_ActionExceedsMaxAssets',
    inputs: [],
  },
  {
    type: 'error',
    name: 'MultiVault_ArraysNotSameLength',
    inputs: [],
  },
  {
    type: 'error',
    name: 'MultiVault_AtomDataTooLong',
    inputs: [],
  },
  {
    type: 'error',
    name: 'MultiVault_AtomDoesNotExist',
    inputs: [
      {
        name: 'atomId',
        type: 'bytes32',
        internalType: 'bytes32',
      },
    ],
  },
  {
    type: 'error',
    name: 'MultiVault_AtomExists',
    inputs: [
      {
        name: 'atomData',
        type: 'bytes',
        internalType: 'bytes',
      },
    ],
  },
  {
    type: 'error',
    name: 'MultiVault_BurnFromZeroAddress',
    inputs: [],
  },
  {
    type: 'error',
    name: 'MultiVault_BurnInsufficientBalance',
    inputs: [],
  },
  {
    type: 'error',
    name: 'MultiVault_CannotApproveOrRevokeSelf',
    inputs: [],
  },
  {
    type: 'error',
    name: 'MultiVault_DepositBelowMinimumDeposit',
    inputs: [],
  },
  {
    type: 'error',
    name: 'MultiVault_DepositOrRedeemZeroShares',
    inputs: [],
  },
  {
    type: 'error',
    name: 'MultiVault_EmptyArray',
    inputs: [],
  },
  {
    type: 'error',
    name: 'MultiVault_InsufficientAssets',
    inputs: [],
  },
  {
    type: 'error',
    name: 'MultiVault_InsufficientBalance',
    inputs: [],
  },
  {
    type: 'error',
    name: 'MultiVault_InsufficientRemainingSharesInVault',
    inputs: [
      {
        name: 'remainingShares',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
  },
  {
    type: 'error',
    name: 'MultiVault_InsufficientSharesInVault',
    inputs: [],
  },
  {
    type: 'error',
    name: 'MultiVault_InvalidArrayLength',
    inputs: [],
  },
  {
    type: 'error',
    name: 'MultiVault_InvalidBondingCurveId',
    inputs: [],
  },
  {
    type: 'error',
    name: 'MultiVault_NoAtomDataProvided',
    inputs: [],
  },
  {
    type: 'error',
    name: 'MultiVault_OnlyAssociatedAtomWallet',
    inputs: [],
  },
  {
    type: 'error',
    name: 'MultiVault_RedeemerNotApproved',
    inputs: [],
  },
  {
    type: 'error',
    name: 'MultiVault_SenderNotApproved',
    inputs: [],
  },
  {
    type: 'error',
    name: 'MultiVault_SlippageExceeded',
    inputs: [],
  },
  {
    type: 'error',
    name: 'MultiVault_TermDoesNotExist',
    inputs: [],
  },
  {
    type: 'error',
    name: 'MultiVault_TripleExists',
    inputs: [
      {
        name: 'termId',
        type: 'bytes32',
        internalType: 'bytes32',
      },
      {
        name: 'subjectId',
        type: 'bytes32',
        internalType: 'bytes32',
      },
      {
        name: 'predicateId',
        type: 'bytes32',
        internalType: 'bytes32',
      },
      {
        name: 'objectId',
        type: 'bytes32',
        internalType: 'bytes32',
      },
    ],
  },
  {
    type: 'error',
    name: 'MultiVault_ZeroAddress',
    inputs: [],
  },
  {
    type: 'error',
    name: 'MultiVault_ZeroValue',
    inputs: [],
  },
  {
    type: 'error',
    name: 'NotInitializing',
    inputs: [],
  },
  {
    type: 'error',
    name: 'ReentrancyGuardReentrantCall',
    inputs: [],
  },
  {
    type: 'error',
    name: 'TermDoesNotExist',
    inputs: [
      {
        name: 'termId',
        type: 'bytes32',
        internalType: 'bytes32',
      },
    ],
  },
  {
    type: 'error',
    name: 'TripleDoesNotExist',
    inputs: [
      {
        name: 'termId',
        type: 'bytes32',
        internalType: 'bytes32',
      },
    ],
  },
] as const;
