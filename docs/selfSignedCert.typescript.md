# `selfSignedCert` Submodule <a name="`selfSignedCert` Submodule" id="@cdktf/provider-tls.selfSignedCert"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SelfSignedCert <a name="SelfSignedCert" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.6/docs/resources/self_signed_cert tls_self_signed_cert}.

#### Initializers <a name="Initializers" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.Initializer"></a>

```typescript
import { selfSignedCert } from '@cdktf/provider-tls'

new selfSignedCert.SelfSignedCert(scope: Construct, id: string, config: SelfSignedCertConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig">SelfSignedCertConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig">SelfSignedCertConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.putSubject">putSubject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.resetDnsNames">resetDnsNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.resetEarlyRenewalHours">resetEarlyRenewalHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.resetIpAddresses">resetIpAddresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.resetIsCaCertificate">resetIsCaCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.resetSetAuthorityKeyId">resetSetAuthorityKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.resetSetSubjectKeyId">resetSetSubjectKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.resetSubject">resetSubject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.resetUris">resetUris</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSubject` <a name="putSubject" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.putSubject"></a>

```typescript
public putSubject(value: IResolvable | SelfSignedCertSubject[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.putSubject.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubject">SelfSignedCertSubject</a>[]

---

##### `resetDnsNames` <a name="resetDnsNames" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.resetDnsNames"></a>

```typescript
public resetDnsNames(): void
```

##### `resetEarlyRenewalHours` <a name="resetEarlyRenewalHours" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.resetEarlyRenewalHours"></a>

```typescript
public resetEarlyRenewalHours(): void
```

##### `resetIpAddresses` <a name="resetIpAddresses" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.resetIpAddresses"></a>

```typescript
public resetIpAddresses(): void
```

##### `resetIsCaCertificate` <a name="resetIsCaCertificate" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.resetIsCaCertificate"></a>

```typescript
public resetIsCaCertificate(): void
```

##### `resetSetAuthorityKeyId` <a name="resetSetAuthorityKeyId" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.resetSetAuthorityKeyId"></a>

```typescript
public resetSetAuthorityKeyId(): void
```

##### `resetSetSubjectKeyId` <a name="resetSetSubjectKeyId" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.resetSetSubjectKeyId"></a>

```typescript
public resetSetSubjectKeyId(): void
```

##### `resetSubject` <a name="resetSubject" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.resetSubject"></a>

```typescript
public resetSubject(): void
```

##### `resetUris` <a name="resetUris" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.resetUris"></a>

```typescript
public resetUris(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SelfSignedCert resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.isConstruct"></a>

```typescript
import { selfSignedCert } from '@cdktf/provider-tls'

selfSignedCert.SelfSignedCert.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.isTerraformElement"></a>

```typescript
import { selfSignedCert } from '@cdktf/provider-tls'

selfSignedCert.SelfSignedCert.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.isTerraformResource"></a>

```typescript
import { selfSignedCert } from '@cdktf/provider-tls'

selfSignedCert.SelfSignedCert.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.generateConfigForImport"></a>

```typescript
import { selfSignedCert } from '@cdktf/provider-tls'

selfSignedCert.SelfSignedCert.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a SelfSignedCert resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SelfSignedCert to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SelfSignedCert that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.6/docs/resources/self_signed_cert#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SelfSignedCert to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.certPem">certPem</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.keyAlgorithm">keyAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.readyForRenewal">readyForRenewal</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.subject">subject</a></code> | <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectList">SelfSignedCertSubjectList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.validityEndTime">validityEndTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.validityStartTime">validityStartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.allowedUsesInput">allowedUsesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.dnsNamesInput">dnsNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.earlyRenewalHoursInput">earlyRenewalHoursInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.ipAddressesInput">ipAddressesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.isCaCertificateInput">isCaCertificateInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.privateKeyPemInput">privateKeyPemInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.setAuthorityKeyIdInput">setAuthorityKeyIdInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.setSubjectKeyIdInput">setSubjectKeyIdInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.subjectInput">subjectInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubject">SelfSignedCertSubject</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.urisInput">urisInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.validityPeriodHoursInput">validityPeriodHoursInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.allowedUses">allowedUses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.dnsNames">dnsNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.earlyRenewalHours">earlyRenewalHours</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.ipAddresses">ipAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.isCaCertificate">isCaCertificate</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.privateKeyPem">privateKeyPem</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.setAuthorityKeyId">setAuthorityKeyId</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.setSubjectKeyId">setSubjectKeyId</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.uris">uris</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.validityPeriodHours">validityPeriodHours</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `certPem`<sup>Required</sup> <a name="certPem" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.certPem"></a>

```typescript
public readonly certPem: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `keyAlgorithm`<sup>Required</sup> <a name="keyAlgorithm" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.keyAlgorithm"></a>

```typescript
public readonly keyAlgorithm: string;
```

- *Type:* string

---

##### `readyForRenewal`<sup>Required</sup> <a name="readyForRenewal" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.readyForRenewal"></a>

```typescript
public readonly readyForRenewal: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `subject`<sup>Required</sup> <a name="subject" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.subject"></a>

```typescript
public readonly subject: SelfSignedCertSubjectList;
```

- *Type:* <a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectList">SelfSignedCertSubjectList</a>

---

##### `validityEndTime`<sup>Required</sup> <a name="validityEndTime" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.validityEndTime"></a>

```typescript
public readonly validityEndTime: string;
```

- *Type:* string

---

##### `validityStartTime`<sup>Required</sup> <a name="validityStartTime" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.validityStartTime"></a>

```typescript
public readonly validityStartTime: string;
```

- *Type:* string

---

##### `allowedUsesInput`<sup>Optional</sup> <a name="allowedUsesInput" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.allowedUsesInput"></a>

```typescript
public readonly allowedUsesInput: string[];
```

- *Type:* string[]

---

##### `dnsNamesInput`<sup>Optional</sup> <a name="dnsNamesInput" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.dnsNamesInput"></a>

```typescript
public readonly dnsNamesInput: string[];
```

- *Type:* string[]

---

##### `earlyRenewalHoursInput`<sup>Optional</sup> <a name="earlyRenewalHoursInput" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.earlyRenewalHoursInput"></a>

```typescript
public readonly earlyRenewalHoursInput: number;
```

- *Type:* number

---

##### `ipAddressesInput`<sup>Optional</sup> <a name="ipAddressesInput" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.ipAddressesInput"></a>

```typescript
public readonly ipAddressesInput: string[];
```

- *Type:* string[]

---

##### `isCaCertificateInput`<sup>Optional</sup> <a name="isCaCertificateInput" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.isCaCertificateInput"></a>

```typescript
public readonly isCaCertificateInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `privateKeyPemInput`<sup>Optional</sup> <a name="privateKeyPemInput" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.privateKeyPemInput"></a>

```typescript
public readonly privateKeyPemInput: string;
```

- *Type:* string

---

##### `setAuthorityKeyIdInput`<sup>Optional</sup> <a name="setAuthorityKeyIdInput" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.setAuthorityKeyIdInput"></a>

```typescript
public readonly setAuthorityKeyIdInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `setSubjectKeyIdInput`<sup>Optional</sup> <a name="setSubjectKeyIdInput" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.setSubjectKeyIdInput"></a>

```typescript
public readonly setSubjectKeyIdInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `subjectInput`<sup>Optional</sup> <a name="subjectInput" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.subjectInput"></a>

```typescript
public readonly subjectInput: IResolvable | SelfSignedCertSubject[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubject">SelfSignedCertSubject</a>[]

---

##### `urisInput`<sup>Optional</sup> <a name="urisInput" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.urisInput"></a>

```typescript
public readonly urisInput: string[];
```

- *Type:* string[]

---

##### `validityPeriodHoursInput`<sup>Optional</sup> <a name="validityPeriodHoursInput" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.validityPeriodHoursInput"></a>

```typescript
public readonly validityPeriodHoursInput: number;
```

- *Type:* number

---

##### `allowedUses`<sup>Required</sup> <a name="allowedUses" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.allowedUses"></a>

```typescript
public readonly allowedUses: string[];
```

- *Type:* string[]

---

##### `dnsNames`<sup>Required</sup> <a name="dnsNames" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.dnsNames"></a>

```typescript
public readonly dnsNames: string[];
```

- *Type:* string[]

---

##### `earlyRenewalHours`<sup>Required</sup> <a name="earlyRenewalHours" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.earlyRenewalHours"></a>

```typescript
public readonly earlyRenewalHours: number;
```

- *Type:* number

---

##### `ipAddresses`<sup>Required</sup> <a name="ipAddresses" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.ipAddresses"></a>

```typescript
public readonly ipAddresses: string[];
```

- *Type:* string[]

---

##### `isCaCertificate`<sup>Required</sup> <a name="isCaCertificate" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.isCaCertificate"></a>

```typescript
public readonly isCaCertificate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `privateKeyPem`<sup>Required</sup> <a name="privateKeyPem" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.privateKeyPem"></a>

```typescript
public readonly privateKeyPem: string;
```

- *Type:* string

---

##### `setAuthorityKeyId`<sup>Required</sup> <a name="setAuthorityKeyId" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.setAuthorityKeyId"></a>

```typescript
public readonly setAuthorityKeyId: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `setSubjectKeyId`<sup>Required</sup> <a name="setSubjectKeyId" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.setSubjectKeyId"></a>

```typescript
public readonly setSubjectKeyId: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `uris`<sup>Required</sup> <a name="uris" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.uris"></a>

```typescript
public readonly uris: string[];
```

- *Type:* string[]

---

##### `validityPeriodHours`<sup>Required</sup> <a name="validityPeriodHours" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.validityPeriodHours"></a>

```typescript
public readonly validityPeriodHours: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCert.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SelfSignedCertConfig <a name="SelfSignedCertConfig" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig.Initializer"></a>

```typescript
import { selfSignedCert } from '@cdktf/provider-tls'

const selfSignedCertConfig: selfSignedCert.SelfSignedCertConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig.property.allowedUses">allowedUses</a></code> | <code>string[]</code> | List of key usages allowed for the issued certificate. |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig.property.privateKeyPem">privateKeyPem</a></code> | <code>string</code> | Private key in [PEM (RFC 1421)](https://datatracker.ietf.org/doc/html/rfc1421) format, that the certificate will belong to. This can be read from a separate file using the [`file`](https://www.terraform.io/language/functions/file) interpolation function. |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig.property.validityPeriodHours">validityPeriodHours</a></code> | <code>number</code> | Number of hours, after initial issuing, that the certificate will remain valid for. |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig.property.dnsNames">dnsNames</a></code> | <code>string[]</code> | List of DNS names for which a certificate is being requested (i.e. certificate subjects). |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig.property.earlyRenewalHours">earlyRenewalHours</a></code> | <code>number</code> | The resource will consider the certificate to have expired the given number of hours before its actual expiry time. |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig.property.ipAddresses">ipAddresses</a></code> | <code>string[]</code> | List of IP addresses for which a certificate is being requested (i.e. certificate subjects). |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig.property.isCaCertificate">isCaCertificate</a></code> | <code>boolean \| cdktf.IResolvable</code> | Is the generated certificate representing a Certificate Authority (CA) (default: `false`). |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig.property.setAuthorityKeyId">setAuthorityKeyId</a></code> | <code>boolean \| cdktf.IResolvable</code> | Should the generated certificate include an [authority key identifier](https://datatracker.ietf.org/doc/html/rfc5280#section-4.2.1.1): for self-signed certificates this is the same value as the [subject key identifier](https://datatracker.ietf.org/doc/html/rfc5280#section-4.2.1.2) (default: `false`). |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig.property.setSubjectKeyId">setSubjectKeyId</a></code> | <code>boolean \| cdktf.IResolvable</code> | Should the generated certificate include a [subject key identifier](https://datatracker.ietf.org/doc/html/rfc5280#section-4.2.1.2) (default: `false`). |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig.property.subject">subject</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubject">SelfSignedCertSubject</a>[]</code> | subject block. |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig.property.uris">uris</a></code> | <code>string[]</code> | List of URIs for which a certificate is being requested (i.e. certificate subjects). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `allowedUses`<sup>Required</sup> <a name="allowedUses" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig.property.allowedUses"></a>

```typescript
public readonly allowedUses: string[];
```

- *Type:* string[]

List of key usages allowed for the issued certificate.

Values are defined in [RFC 5280](https://datatracker.ietf.org/doc/html/rfc5280) and combine flags defined by both [Key Usages](https://datatracker.ietf.org/doc/html/rfc5280#section-4.2.1.3) and [Extended Key Usages](https://datatracker.ietf.org/doc/html/rfc5280#section-4.2.1.12). Accepted values: `any_extended`, `cert_signing`, `client_auth`, `code_signing`, `content_commitment`, `crl_signing`, `data_encipherment`, `decipher_only`, `digital_signature`, `email_protection`, `encipher_only`, `ipsec_end_system`, `ipsec_tunnel`, `ipsec_user`, `key_agreement`, `key_encipherment`, `microsoft_commercial_code_signing`, `microsoft_kernel_code_signing`, `microsoft_server_gated_crypto`, `netscape_server_gated_crypto`, `ocsp_signing`, `server_auth`, `timestamping`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.6/docs/resources/self_signed_cert#allowed_uses SelfSignedCert#allowed_uses}

---

##### `privateKeyPem`<sup>Required</sup> <a name="privateKeyPem" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig.property.privateKeyPem"></a>

```typescript
public readonly privateKeyPem: string;
```

- *Type:* string

Private key in [PEM (RFC 1421)](https://datatracker.ietf.org/doc/html/rfc1421) format, that the certificate will belong to. This can be read from a separate file using the [`file`](https://www.terraform.io/language/functions/file) interpolation function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.6/docs/resources/self_signed_cert#private_key_pem SelfSignedCert#private_key_pem}

---

##### `validityPeriodHours`<sup>Required</sup> <a name="validityPeriodHours" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig.property.validityPeriodHours"></a>

```typescript
public readonly validityPeriodHours: number;
```

- *Type:* number

Number of hours, after initial issuing, that the certificate will remain valid for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.6/docs/resources/self_signed_cert#validity_period_hours SelfSignedCert#validity_period_hours}

---

##### `dnsNames`<sup>Optional</sup> <a name="dnsNames" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig.property.dnsNames"></a>

```typescript
public readonly dnsNames: string[];
```

- *Type:* string[]

List of DNS names for which a certificate is being requested (i.e. certificate subjects).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.6/docs/resources/self_signed_cert#dns_names SelfSignedCert#dns_names}

---

##### `earlyRenewalHours`<sup>Optional</sup> <a name="earlyRenewalHours" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig.property.earlyRenewalHours"></a>

```typescript
public readonly earlyRenewalHours: number;
```

- *Type:* number

The resource will consider the certificate to have expired the given number of hours before its actual expiry time.

This can be useful to deploy an updated certificate in advance of the expiration of the current certificate. However, the old certificate remains valid until its true expiration time, since this resource does not (and cannot) support certificate revocation. Also, this advance update can only be performed should the Terraform configuration be applied during the early renewal period. (default: `0`)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.6/docs/resources/self_signed_cert#early_renewal_hours SelfSignedCert#early_renewal_hours}

---

##### `ipAddresses`<sup>Optional</sup> <a name="ipAddresses" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig.property.ipAddresses"></a>

```typescript
public readonly ipAddresses: string[];
```

- *Type:* string[]

List of IP addresses for which a certificate is being requested (i.e. certificate subjects).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.6/docs/resources/self_signed_cert#ip_addresses SelfSignedCert#ip_addresses}

---

##### `isCaCertificate`<sup>Optional</sup> <a name="isCaCertificate" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig.property.isCaCertificate"></a>

```typescript
public readonly isCaCertificate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Is the generated certificate representing a Certificate Authority (CA) (default: `false`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.6/docs/resources/self_signed_cert#is_ca_certificate SelfSignedCert#is_ca_certificate}

---

##### `setAuthorityKeyId`<sup>Optional</sup> <a name="setAuthorityKeyId" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig.property.setAuthorityKeyId"></a>

```typescript
public readonly setAuthorityKeyId: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Should the generated certificate include an [authority key identifier](https://datatracker.ietf.org/doc/html/rfc5280#section-4.2.1.1): for self-signed certificates this is the same value as the [subject key identifier](https://datatracker.ietf.org/doc/html/rfc5280#section-4.2.1.2) (default: `false`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.6/docs/resources/self_signed_cert#set_authority_key_id SelfSignedCert#set_authority_key_id}

---

##### `setSubjectKeyId`<sup>Optional</sup> <a name="setSubjectKeyId" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig.property.setSubjectKeyId"></a>

```typescript
public readonly setSubjectKeyId: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Should the generated certificate include a [subject key identifier](https://datatracker.ietf.org/doc/html/rfc5280#section-4.2.1.2) (default: `false`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.6/docs/resources/self_signed_cert#set_subject_key_id SelfSignedCert#set_subject_key_id}

---

##### `subject`<sup>Optional</sup> <a name="subject" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig.property.subject"></a>

```typescript
public readonly subject: IResolvable | SelfSignedCertSubject[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubject">SelfSignedCertSubject</a>[]

subject block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.6/docs/resources/self_signed_cert#subject SelfSignedCert#subject}

---

##### `uris`<sup>Optional</sup> <a name="uris" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertConfig.property.uris"></a>

```typescript
public readonly uris: string[];
```

- *Type:* string[]

List of URIs for which a certificate is being requested (i.e. certificate subjects).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.6/docs/resources/self_signed_cert#uris SelfSignedCert#uris}

---

### SelfSignedCertSubject <a name="SelfSignedCertSubject" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubject"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubject.Initializer"></a>

```typescript
import { selfSignedCert } from '@cdktf/provider-tls'

const selfSignedCertSubject: selfSignedCert.SelfSignedCertSubject = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubject.property.commonName">commonName</a></code> | <code>string</code> | Distinguished name: `CN`. |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubject.property.country">country</a></code> | <code>string</code> | Distinguished name: `C`. |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubject.property.locality">locality</a></code> | <code>string</code> | Distinguished name: `L`. |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubject.property.organization">organization</a></code> | <code>string</code> | Distinguished name: `O`. |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubject.property.organizationalUnit">organizationalUnit</a></code> | <code>string</code> | Distinguished name: `OU`. |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubject.property.postalCode">postalCode</a></code> | <code>string</code> | Distinguished name: `PC`. |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubject.property.province">province</a></code> | <code>string</code> | Distinguished name: `ST`. |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubject.property.serialNumber">serialNumber</a></code> | <code>string</code> | Distinguished name: `SERIALNUMBER`. |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubject.property.streetAddress">streetAddress</a></code> | <code>string[]</code> | Distinguished name: `STREET`. |

---

##### `commonName`<sup>Optional</sup> <a name="commonName" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubject.property.commonName"></a>

```typescript
public readonly commonName: string;
```

- *Type:* string

Distinguished name: `CN`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.6/docs/resources/self_signed_cert#common_name SelfSignedCert#common_name}

---

##### `country`<sup>Optional</sup> <a name="country" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubject.property.country"></a>

```typescript
public readonly country: string;
```

- *Type:* string

Distinguished name: `C`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.6/docs/resources/self_signed_cert#country SelfSignedCert#country}

---

##### `locality`<sup>Optional</sup> <a name="locality" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubject.property.locality"></a>

```typescript
public readonly locality: string;
```

- *Type:* string

Distinguished name: `L`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.6/docs/resources/self_signed_cert#locality SelfSignedCert#locality}

---

##### `organization`<sup>Optional</sup> <a name="organization" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubject.property.organization"></a>

```typescript
public readonly organization: string;
```

- *Type:* string

Distinguished name: `O`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.6/docs/resources/self_signed_cert#organization SelfSignedCert#organization}

---

##### `organizationalUnit`<sup>Optional</sup> <a name="organizationalUnit" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubject.property.organizationalUnit"></a>

```typescript
public readonly organizationalUnit: string;
```

- *Type:* string

Distinguished name: `OU`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.6/docs/resources/self_signed_cert#organizational_unit SelfSignedCert#organizational_unit}

---

##### `postalCode`<sup>Optional</sup> <a name="postalCode" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubject.property.postalCode"></a>

```typescript
public readonly postalCode: string;
```

- *Type:* string

Distinguished name: `PC`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.6/docs/resources/self_signed_cert#postal_code SelfSignedCert#postal_code}

---

##### `province`<sup>Optional</sup> <a name="province" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubject.property.province"></a>

```typescript
public readonly province: string;
```

- *Type:* string

Distinguished name: `ST`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.6/docs/resources/self_signed_cert#province SelfSignedCert#province}

---

##### `serialNumber`<sup>Optional</sup> <a name="serialNumber" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubject.property.serialNumber"></a>

```typescript
public readonly serialNumber: string;
```

- *Type:* string

Distinguished name: `SERIALNUMBER`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.6/docs/resources/self_signed_cert#serial_number SelfSignedCert#serial_number}

---

##### `streetAddress`<sup>Optional</sup> <a name="streetAddress" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubject.property.streetAddress"></a>

```typescript
public readonly streetAddress: string[];
```

- *Type:* string[]

Distinguished name: `STREET`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.6/docs/resources/self_signed_cert#street_address SelfSignedCert#street_address}

---

## Classes <a name="Classes" id="Classes"></a>

### SelfSignedCertSubjectList <a name="SelfSignedCertSubjectList" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectList.Initializer"></a>

```typescript
import { selfSignedCert } from '@cdktf/provider-tls'

new selfSignedCert.SelfSignedCertSubjectList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectList.get"></a>

```typescript
public get(index: number): SelfSignedCertSubjectOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubject">SelfSignedCertSubject</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SelfSignedCertSubject[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubject">SelfSignedCertSubject</a>[]

---


### SelfSignedCertSubjectOutputReference <a name="SelfSignedCertSubjectOutputReference" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.Initializer"></a>

```typescript
import { selfSignedCert } from '@cdktf/provider-tls'

new selfSignedCert.SelfSignedCertSubjectOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.resetCommonName">resetCommonName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.resetCountry">resetCountry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.resetLocality">resetLocality</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.resetOrganization">resetOrganization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.resetOrganizationalUnit">resetOrganizationalUnit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.resetPostalCode">resetPostalCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.resetProvince">resetProvince</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.resetSerialNumber">resetSerialNumber</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.resetStreetAddress">resetStreetAddress</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCommonName` <a name="resetCommonName" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.resetCommonName"></a>

```typescript
public resetCommonName(): void
```

##### `resetCountry` <a name="resetCountry" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.resetCountry"></a>

```typescript
public resetCountry(): void
```

##### `resetLocality` <a name="resetLocality" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.resetLocality"></a>

```typescript
public resetLocality(): void
```

##### `resetOrganization` <a name="resetOrganization" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.resetOrganization"></a>

```typescript
public resetOrganization(): void
```

##### `resetOrganizationalUnit` <a name="resetOrganizationalUnit" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.resetOrganizationalUnit"></a>

```typescript
public resetOrganizationalUnit(): void
```

##### `resetPostalCode` <a name="resetPostalCode" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.resetPostalCode"></a>

```typescript
public resetPostalCode(): void
```

##### `resetProvince` <a name="resetProvince" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.resetProvince"></a>

```typescript
public resetProvince(): void
```

##### `resetSerialNumber` <a name="resetSerialNumber" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.resetSerialNumber"></a>

```typescript
public resetSerialNumber(): void
```

##### `resetStreetAddress` <a name="resetStreetAddress" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.resetStreetAddress"></a>

```typescript
public resetStreetAddress(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.commonNameInput">commonNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.countryInput">countryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.localityInput">localityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.organizationalUnitInput">organizationalUnitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.organizationInput">organizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.postalCodeInput">postalCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.provinceInput">provinceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.serialNumberInput">serialNumberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.streetAddressInput">streetAddressInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.commonName">commonName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.country">country</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.locality">locality</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.organization">organization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.organizationalUnit">organizationalUnit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.postalCode">postalCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.province">province</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.serialNumber">serialNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.streetAddress">streetAddress</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubject">SelfSignedCertSubject</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `commonNameInput`<sup>Optional</sup> <a name="commonNameInput" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.commonNameInput"></a>

```typescript
public readonly commonNameInput: string;
```

- *Type:* string

---

##### `countryInput`<sup>Optional</sup> <a name="countryInput" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.countryInput"></a>

```typescript
public readonly countryInput: string;
```

- *Type:* string

---

##### `localityInput`<sup>Optional</sup> <a name="localityInput" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.localityInput"></a>

```typescript
public readonly localityInput: string;
```

- *Type:* string

---

##### `organizationalUnitInput`<sup>Optional</sup> <a name="organizationalUnitInput" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.organizationalUnitInput"></a>

```typescript
public readonly organizationalUnitInput: string;
```

- *Type:* string

---

##### `organizationInput`<sup>Optional</sup> <a name="organizationInput" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.organizationInput"></a>

```typescript
public readonly organizationInput: string;
```

- *Type:* string

---

##### `postalCodeInput`<sup>Optional</sup> <a name="postalCodeInput" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.postalCodeInput"></a>

```typescript
public readonly postalCodeInput: string;
```

- *Type:* string

---

##### `provinceInput`<sup>Optional</sup> <a name="provinceInput" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.provinceInput"></a>

```typescript
public readonly provinceInput: string;
```

- *Type:* string

---

##### `serialNumberInput`<sup>Optional</sup> <a name="serialNumberInput" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.serialNumberInput"></a>

```typescript
public readonly serialNumberInput: string;
```

- *Type:* string

---

##### `streetAddressInput`<sup>Optional</sup> <a name="streetAddressInput" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.streetAddressInput"></a>

```typescript
public readonly streetAddressInput: string[];
```

- *Type:* string[]

---

##### `commonName`<sup>Required</sup> <a name="commonName" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.commonName"></a>

```typescript
public readonly commonName: string;
```

- *Type:* string

---

##### `country`<sup>Required</sup> <a name="country" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.country"></a>

```typescript
public readonly country: string;
```

- *Type:* string

---

##### `locality`<sup>Required</sup> <a name="locality" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.locality"></a>

```typescript
public readonly locality: string;
```

- *Type:* string

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.organization"></a>

```typescript
public readonly organization: string;
```

- *Type:* string

---

##### `organizationalUnit`<sup>Required</sup> <a name="organizationalUnit" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.organizationalUnit"></a>

```typescript
public readonly organizationalUnit: string;
```

- *Type:* string

---

##### `postalCode`<sup>Required</sup> <a name="postalCode" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.postalCode"></a>

```typescript
public readonly postalCode: string;
```

- *Type:* string

---

##### `province`<sup>Required</sup> <a name="province" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.province"></a>

```typescript
public readonly province: string;
```

- *Type:* string

---

##### `serialNumber`<sup>Required</sup> <a name="serialNumber" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.serialNumber"></a>

```typescript
public readonly serialNumber: string;
```

- *Type:* string

---

##### `streetAddress`<sup>Required</sup> <a name="streetAddress" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.streetAddress"></a>

```typescript
public readonly streetAddress: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubjectOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SelfSignedCertSubject;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-tls.selfSignedCert.SelfSignedCertSubject">SelfSignedCertSubject</a>

---



