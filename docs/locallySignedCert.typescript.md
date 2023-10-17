# `tls_locally_signed_cert`

Refer to the Terraform Registory for docs: [`tls_locally_signed_cert`](https://registry.terraform.io/providers/hashicorp/tls/4.0.4/docs/resources/locally_signed_cert).

# `locallySignedCert` Submodule <a name="`locallySignedCert` Submodule" id="@cdktf/provider-tls.locallySignedCert"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LocallySignedCert <a name="LocallySignedCert" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.4/docs/resources/locally_signed_cert tls_locally_signed_cert}.

#### Initializers <a name="Initializers" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.Initializer"></a>

```typescript
import { locallySignedCert } from '@cdktf/provider-tls'

new locallySignedCert.LocallySignedCert(scope: Construct, id: string, config: LocallySignedCertConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCertConfig">LocallySignedCertConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCertConfig">LocallySignedCertConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.resetEarlyRenewalHours">resetEarlyRenewalHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.resetIsCaCertificate">resetIsCaCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.resetSetSubjectKeyId">resetSetSubjectKeyId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `resetEarlyRenewalHours` <a name="resetEarlyRenewalHours" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.resetEarlyRenewalHours"></a>

```typescript
public resetEarlyRenewalHours(): void
```

##### `resetIsCaCertificate` <a name="resetIsCaCertificate" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.resetIsCaCertificate"></a>

```typescript
public resetIsCaCertificate(): void
```

##### `resetSetSubjectKeyId` <a name="resetSetSubjectKeyId" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.resetSetSubjectKeyId"></a>

```typescript
public resetSetSubjectKeyId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a LocallySignedCert resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.isConstruct"></a>

```typescript
import { locallySignedCert } from '@cdktf/provider-tls'

locallySignedCert.LocallySignedCert.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.isTerraformElement"></a>

```typescript
import { locallySignedCert } from '@cdktf/provider-tls'

locallySignedCert.LocallySignedCert.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.isTerraformResource"></a>

```typescript
import { locallySignedCert } from '@cdktf/provider-tls'

locallySignedCert.LocallySignedCert.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.generateConfigForImport"></a>

```typescript
import { locallySignedCert } from '@cdktf/provider-tls'

locallySignedCert.LocallySignedCert.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a LocallySignedCert resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LocallySignedCert to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LocallySignedCert that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.4/docs/resources/locally_signed_cert#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the LocallySignedCert to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.caKeyAlgorithm">caKeyAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.certPem">certPem</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.readyForRenewal">readyForRenewal</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.validityEndTime">validityEndTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.validityStartTime">validityStartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.allowedUsesInput">allowedUsesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.caCertPemInput">caCertPemInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.caPrivateKeyPemInput">caPrivateKeyPemInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.certRequestPemInput">certRequestPemInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.earlyRenewalHoursInput">earlyRenewalHoursInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.isCaCertificateInput">isCaCertificateInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.setSubjectKeyIdInput">setSubjectKeyIdInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.validityPeriodHoursInput">validityPeriodHoursInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.allowedUses">allowedUses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.caCertPem">caCertPem</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.caPrivateKeyPem">caPrivateKeyPem</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.certRequestPem">certRequestPem</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.earlyRenewalHours">earlyRenewalHours</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.isCaCertificate">isCaCertificate</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.setSubjectKeyId">setSubjectKeyId</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.validityPeriodHours">validityPeriodHours</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `caKeyAlgorithm`<sup>Required</sup> <a name="caKeyAlgorithm" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.caKeyAlgorithm"></a>

```typescript
public readonly caKeyAlgorithm: string;
```

- *Type:* string

---

##### `certPem`<sup>Required</sup> <a name="certPem" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.certPem"></a>

```typescript
public readonly certPem: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `readyForRenewal`<sup>Required</sup> <a name="readyForRenewal" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.readyForRenewal"></a>

```typescript
public readonly readyForRenewal: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `validityEndTime`<sup>Required</sup> <a name="validityEndTime" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.validityEndTime"></a>

```typescript
public readonly validityEndTime: string;
```

- *Type:* string

---

##### `validityStartTime`<sup>Required</sup> <a name="validityStartTime" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.validityStartTime"></a>

```typescript
public readonly validityStartTime: string;
```

- *Type:* string

---

##### `allowedUsesInput`<sup>Optional</sup> <a name="allowedUsesInput" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.allowedUsesInput"></a>

```typescript
public readonly allowedUsesInput: string[];
```

- *Type:* string[]

---

##### `caCertPemInput`<sup>Optional</sup> <a name="caCertPemInput" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.caCertPemInput"></a>

```typescript
public readonly caCertPemInput: string;
```

- *Type:* string

---

##### `caPrivateKeyPemInput`<sup>Optional</sup> <a name="caPrivateKeyPemInput" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.caPrivateKeyPemInput"></a>

```typescript
public readonly caPrivateKeyPemInput: string;
```

- *Type:* string

---

##### `certRequestPemInput`<sup>Optional</sup> <a name="certRequestPemInput" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.certRequestPemInput"></a>

```typescript
public readonly certRequestPemInput: string;
```

- *Type:* string

---

##### `earlyRenewalHoursInput`<sup>Optional</sup> <a name="earlyRenewalHoursInput" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.earlyRenewalHoursInput"></a>

```typescript
public readonly earlyRenewalHoursInput: number;
```

- *Type:* number

---

##### `isCaCertificateInput`<sup>Optional</sup> <a name="isCaCertificateInput" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.isCaCertificateInput"></a>

```typescript
public readonly isCaCertificateInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `setSubjectKeyIdInput`<sup>Optional</sup> <a name="setSubjectKeyIdInput" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.setSubjectKeyIdInput"></a>

```typescript
public readonly setSubjectKeyIdInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `validityPeriodHoursInput`<sup>Optional</sup> <a name="validityPeriodHoursInput" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.validityPeriodHoursInput"></a>

```typescript
public readonly validityPeriodHoursInput: number;
```

- *Type:* number

---

##### `allowedUses`<sup>Required</sup> <a name="allowedUses" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.allowedUses"></a>

```typescript
public readonly allowedUses: string[];
```

- *Type:* string[]

---

##### `caCertPem`<sup>Required</sup> <a name="caCertPem" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.caCertPem"></a>

```typescript
public readonly caCertPem: string;
```

- *Type:* string

---

##### `caPrivateKeyPem`<sup>Required</sup> <a name="caPrivateKeyPem" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.caPrivateKeyPem"></a>

```typescript
public readonly caPrivateKeyPem: string;
```

- *Type:* string

---

##### `certRequestPem`<sup>Required</sup> <a name="certRequestPem" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.certRequestPem"></a>

```typescript
public readonly certRequestPem: string;
```

- *Type:* string

---

##### `earlyRenewalHours`<sup>Required</sup> <a name="earlyRenewalHours" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.earlyRenewalHours"></a>

```typescript
public readonly earlyRenewalHours: number;
```

- *Type:* number

---

##### `isCaCertificate`<sup>Required</sup> <a name="isCaCertificate" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.isCaCertificate"></a>

```typescript
public readonly isCaCertificate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `setSubjectKeyId`<sup>Required</sup> <a name="setSubjectKeyId" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.setSubjectKeyId"></a>

```typescript
public readonly setSubjectKeyId: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `validityPeriodHours`<sup>Required</sup> <a name="validityPeriodHours" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.validityPeriodHours"></a>

```typescript
public readonly validityPeriodHours: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCert.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LocallySignedCertConfig <a name="LocallySignedCertConfig" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCertConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCertConfig.Initializer"></a>

```typescript
import { locallySignedCert } from '@cdktf/provider-tls'

const locallySignedCertConfig: locallySignedCert.LocallySignedCertConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCertConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCertConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCertConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCertConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCertConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCertConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCertConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCertConfig.property.allowedUses">allowedUses</a></code> | <code>string[]</code> | List of key usages allowed for the issued certificate. |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCertConfig.property.caCertPem">caCertPem</a></code> | <code>string</code> | Certificate data of the Certificate Authority (CA) in [PEM (RFC 1421)](https://datatracker.ietf.org/doc/html/rfc1421) format. |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCertConfig.property.caPrivateKeyPem">caPrivateKeyPem</a></code> | <code>string</code> | Private key of the Certificate Authority (CA) used to sign the certificate, in [PEM (RFC 1421)](https://datatracker.ietf.org/doc/html/rfc1421) format. |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCertConfig.property.certRequestPem">certRequestPem</a></code> | <code>string</code> | Certificate request data in [PEM (RFC 1421)](https://datatracker.ietf.org/doc/html/rfc1421) format. |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCertConfig.property.validityPeriodHours">validityPeriodHours</a></code> | <code>number</code> | Number of hours, after initial issuing, that the certificate will remain valid for. |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCertConfig.property.earlyRenewalHours">earlyRenewalHours</a></code> | <code>number</code> | The resource will consider the certificate to have expired the given number of hours before its actual expiry time. |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCertConfig.property.isCaCertificate">isCaCertificate</a></code> | <code>boolean \| cdktf.IResolvable</code> | Is the generated certificate representing a Certificate Authority (CA) (default: `false`). |
| <code><a href="#@cdktf/provider-tls.locallySignedCert.LocallySignedCertConfig.property.setSubjectKeyId">setSubjectKeyId</a></code> | <code>boolean \| cdktf.IResolvable</code> | Should the generated certificate include a [subject key identifier](https://datatracker.ietf.org/doc/html/rfc5280#section-4.2.1.2) (default: `false`). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCertConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCertConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCertConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCertConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCertConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCertConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCertConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `allowedUses`<sup>Required</sup> <a name="allowedUses" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCertConfig.property.allowedUses"></a>

```typescript
public readonly allowedUses: string[];
```

- *Type:* string[]

List of key usages allowed for the issued certificate.

Values are defined in [RFC 5280](https://datatracker.ietf.org/doc/html/rfc5280) and combine flags defined by both [Key Usages](https://datatracker.ietf.org/doc/html/rfc5280#section-4.2.1.3) and [Extended Key Usages](https://datatracker.ietf.org/doc/html/rfc5280#section-4.2.1.12). Accepted values: `any_extended`, `cert_signing`, `client_auth`, `code_signing`, `content_commitment`, `crl_signing`, `data_encipherment`, `decipher_only`, `digital_signature`, `email_protection`, `encipher_only`, `ipsec_end_system`, `ipsec_tunnel`, `ipsec_user`, `key_agreement`, `key_encipherment`, `microsoft_commercial_code_signing`, `microsoft_kernel_code_signing`, `microsoft_server_gated_crypto`, `netscape_server_gated_crypto`, `ocsp_signing`, `server_auth`, `timestamping`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.4/docs/resources/locally_signed_cert#allowed_uses LocallySignedCert#allowed_uses}

---

##### `caCertPem`<sup>Required</sup> <a name="caCertPem" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCertConfig.property.caCertPem"></a>

```typescript
public readonly caCertPem: string;
```

- *Type:* string

Certificate data of the Certificate Authority (CA) in [PEM (RFC 1421)](https://datatracker.ietf.org/doc/html/rfc1421) format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.4/docs/resources/locally_signed_cert#ca_cert_pem LocallySignedCert#ca_cert_pem}

---

##### `caPrivateKeyPem`<sup>Required</sup> <a name="caPrivateKeyPem" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCertConfig.property.caPrivateKeyPem"></a>

```typescript
public readonly caPrivateKeyPem: string;
```

- *Type:* string

Private key of the Certificate Authority (CA) used to sign the certificate, in [PEM (RFC 1421)](https://datatracker.ietf.org/doc/html/rfc1421) format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.4/docs/resources/locally_signed_cert#ca_private_key_pem LocallySignedCert#ca_private_key_pem}

---

##### `certRequestPem`<sup>Required</sup> <a name="certRequestPem" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCertConfig.property.certRequestPem"></a>

```typescript
public readonly certRequestPem: string;
```

- *Type:* string

Certificate request data in [PEM (RFC 1421)](https://datatracker.ietf.org/doc/html/rfc1421) format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.4/docs/resources/locally_signed_cert#cert_request_pem LocallySignedCert#cert_request_pem}

---

##### `validityPeriodHours`<sup>Required</sup> <a name="validityPeriodHours" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCertConfig.property.validityPeriodHours"></a>

```typescript
public readonly validityPeriodHours: number;
```

- *Type:* number

Number of hours, after initial issuing, that the certificate will remain valid for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.4/docs/resources/locally_signed_cert#validity_period_hours LocallySignedCert#validity_period_hours}

---

##### `earlyRenewalHours`<sup>Optional</sup> <a name="earlyRenewalHours" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCertConfig.property.earlyRenewalHours"></a>

```typescript
public readonly earlyRenewalHours: number;
```

- *Type:* number

The resource will consider the certificate to have expired the given number of hours before its actual expiry time.

This can be useful to deploy an updated certificate in advance of the expiration of the current certificate. However, the old certificate remains valid until its true expiration time, since this resource does not (and cannot) support certificate revocation. Also, this advance update can only be performed should the Terraform configuration be applied during the early renewal period. (default: `0`)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.4/docs/resources/locally_signed_cert#early_renewal_hours LocallySignedCert#early_renewal_hours}

---

##### `isCaCertificate`<sup>Optional</sup> <a name="isCaCertificate" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCertConfig.property.isCaCertificate"></a>

```typescript
public readonly isCaCertificate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Is the generated certificate representing a Certificate Authority (CA) (default: `false`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.4/docs/resources/locally_signed_cert#is_ca_certificate LocallySignedCert#is_ca_certificate}

---

##### `setSubjectKeyId`<sup>Optional</sup> <a name="setSubjectKeyId" id="@cdktf/provider-tls.locallySignedCert.LocallySignedCertConfig.property.setSubjectKeyId"></a>

```typescript
public readonly setSubjectKeyId: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Should the generated certificate include a [subject key identifier](https://datatracker.ietf.org/doc/html/rfc5280#section-4.2.1.2) (default: `false`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.4/docs/resources/locally_signed_cert#set_subject_key_id LocallySignedCert#set_subject_key_id}

---



