export type OperationNodeKind =
  | 'IdentifierNode'
  | 'QueryNode'
  | 'RawNode'
  | 'SelectNode'
  | 'SelectionNode'
  | 'ReferenceNode'
  | 'ColumnNode'
  | 'TableNode'
  | 'AliasNode'
  | 'FromNode'
  | 'SelectAllNode'
  | 'FilterNode'
  | 'AndNode'
  | 'OrNode'
  | 'ParensNode'
  | 'ValueNode'
  | 'ValueListNode'
  | 'PrimitiveValueListNode'
  | 'JoinNode'
  | 'OperatorNode'

export interface OperationNode {
  readonly kind: OperationNodeKind
}
